import React from 'react';
import { Heading } from '@chakra-ui/core';
import PropTypes from 'prop-types';
import { RESPONSIVE_TEXT_ALIGN } from '../styles/responsiveStyles';

function ResponsiveHeading({ as = 'h2', size = 'xl', mt = 4, children }) {
  return (
    <Heading
      as={as}
      mb={2}
      mt={mt}
      size={size}
      textAlign={RESPONSIVE_TEXT_ALIGN}
    >
      {children}
    </Heading>
  );
}

ResponsiveHeading.propTypes = {
  as: PropTypes.string,
  size: PropTypes.string,
  mt: PropTypes.number,
  children: PropTypes.node.isRequired,
};

ResponsiveHeading.defaultProps = {
  as: 'h2',
  size: 'xl',
  mt: 4,
};

export default ResponsiveHeading;
