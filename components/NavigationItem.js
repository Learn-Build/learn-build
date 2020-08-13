import React from 'react';
import Link from 'next/link';
import { Text } from '@chakra-ui/core';
import PropTypes from 'prop-types';

function NavigationItem({ href, children }) {
  return (
    <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
      <Link href={href}>
        <a href={href}>{children}</a>
      </Link>
    </Text>
  );
}

NavigationItem.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default NavigationItem;
