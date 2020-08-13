import React from 'react';
import { Heading } from '@chakra-ui/core';
import PropTypes from 'prop-types';

function ResponsiveHeading({ as = 'h2', size = 'xl', mt = 4, children }) {
  const responsiveAlign = ['center', 'center', 'center', 'left'];

  return (
    <Heading as={as} mb={2} mt={mt} size={size} textAlign={responsiveAlign}>
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
