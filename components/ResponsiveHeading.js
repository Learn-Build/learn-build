import React from 'react';
import { Heading, Divider } from '@chakra-ui/core';
import PropTypes from 'prop-types';
import { RESPONSIVE_TEXT_ALIGN } from '../styles/responsiveStyles';

function ResponsiveHeading({ as, size, mt, showDivider, children }) {
  return (
    <>
      <Heading
        as={as}
        mb={2}
        mt={mt}
        size={size}
        textAlign={RESPONSIVE_TEXT_ALIGN}
      >
        {children}
      </Heading>
      {showDivider && <Divider borderColor="pink.100" />}
    </>
  );
}

ResponsiveHeading.propTypes = {
  as: PropTypes.string,
  size: PropTypes.string,
  mt: PropTypes.number,
  showDivider: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

ResponsiveHeading.defaultProps = {
  as: 'h2',
  size: 'xl',
  mt: 4,
  showDivider: false,
};

export default ResponsiveHeading;
