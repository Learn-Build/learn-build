import React from 'react';
import { Box, Button } from '@chakra-ui/core';
import PropTypes from 'prop-types';

function NavigationButton({ show, children }) {
  return (
    <Box
      display={{ sm: show ? 'block' : 'none', md: 'block' }}
      mt={{ base: 4, md: 0 }}
      mr={2}
    >
      <Button bg="transparent" border="1px">
        {children}
      </Button>
    </Box>
  );
}

NavigationButton.propTypes = {
  show: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default NavigationButton;
