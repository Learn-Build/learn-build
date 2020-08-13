import React, { useState } from 'react';
import { Button } from '@chakra-ui/core';
import PropTypes from 'prop-types';

function TogglableButton({
  enabledText = 'Following',
  disabledText = 'Follow',
  enabledVariant = 'solid',
  disabledVariant = 'outline',
  initialState = false,
  size = ['xs', 'xs', 'sm', 'md'],
  fontSize = ['xs', 'sm'],
  variantColor = 'pink',
  my = 3,
  onClick = () => {},
}) {
  const [enabled, setEnabled] = useState(initialState);

  return (
    <Button
      rightIcon={enabled ? 'check' : 'small-add'}
      onClick={() => {
        setEnabled(!enabled);
        onClick();
      }}
      variant={enabled ? enabledVariant : disabledVariant}
      variantColor={variantColor}
      size={size}
      fontSize={fontSize}
      my={my}
    >
      {enabled ? enabledText : disabledText}
    </Button>
  );
}

TogglableButton.propTypes = {
  enabledText: PropTypes.string,
  disabledText: PropTypes.string,
  enabledVariant: PropTypes.string,
  disabledVariant: PropTypes.string,
  initialState: PropTypes.bool,
  size: PropTypes.arrayOf(PropTypes.string),
  fontSize: PropTypes.arrayOf(PropTypes.string),
  variantColor: PropTypes.string,
  my: PropTypes.number,
  onClick: PropTypes.func,
};

TogglableButton.defaultProps = {
  enabledText: 'Following',
  disabledText: 'Follow',
  enabledVariant: 'solid',
  disabledVariant: 'outline',
  initialState: false,
  size: ['xs', 'xs', 'sm', 'md'],
  fontSize: ['xs', 'sm'],
  variantColor: 'pink',
  my: 3,
  onClick: () => {},
};

export default TogglableButton;
