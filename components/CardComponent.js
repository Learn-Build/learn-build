import React from 'react';
import { PseudoBox } from '@chakra-ui/core';
import PropTypes from 'prop-types';

function CardComponent({ children, _hover }) {
  return (
    <PseudoBox
      borderWidth="1px"
      rounded="lg"
      p={[3, 3, 3, 5]}
      my={5}
      mr={[0, 0, 0, 5]}
      boxShadow="md"
      _hover={_hover}
    >
      {children}
    </PseudoBox>
  );
}

CardComponent.propTypes = {
  children: PropTypes.node.isRequired,
  _hover: PropTypes.shape({
    shadow: PropTypes.string,
    backgroundColor: PropTypes.string,
  }),
};

CardComponent.defaultProps = {
  _hover: {},
};

export default CardComponent;
