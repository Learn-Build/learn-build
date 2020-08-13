import React, { useState } from 'react';
import { Button } from '@chakra-ui/core';
import PropTypes from 'prop-types';
import { TagProps } from '../constants/propTypes';

function TagFilterButton({ tag, handleChange }) {
  const [selected, setSelected] = useState(false);

  return (
    <Button
      key={tag.id}
      onClick={() => {
        setSelected(!selected);
        handleChange(tag.id);
      }}
      my={1}
      variant={selected ? 'solid' : 'outline'}
      variantColor="pink"
    >
      {tag.name}
    </Button>
  );
}

TagFilterButton.propTypes = {
  tag: TagProps.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default TagFilterButton;
