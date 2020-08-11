import Link from 'next/link';
import { Text } from '@chakra-ui/core';

function NavigationItem({ href, children }) {
  return (
    <Text mt={{ base: 4, md: 0 }} mr={6} display="block" >
      <Link href={href}>
        <a>{children}</a>
      </Link>
    </Text>
  );
}

export default NavigationItem;
