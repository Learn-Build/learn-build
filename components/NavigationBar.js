import React, { useState } from 'react';
import Link from 'next/link';
import { Box, Heading, Flex, Icon, Stack } from '@chakra-ui/core';
import NavigationButton from './NavigationButton';
import NavigationItem from './NavigationItem';

// Taken and modified from here:
// https://chakra-ui.com/recipes#responsive-header-with-chakra-ui
function NavigationBar() {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  const displayBlock = show ? 'block' : 'none';
  const displayFlex = show ? 'flex' : 'none';
  const displayGrid = show ? 'grid' : 'none';

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      py="0.8rem"
      px={{ base: '1.5rem', sm: '4rem' }}
      bg="pink.700"
      color="white"
    >
      <Flex align="center" mr={5}>
        <Stack isInline>
          <Link href="/">
            <a href="/">
              <Icon name="logo" size="50px" mr={2} color="pink.300" focusable />
            </a>
          </Link>
          <Heading as="h1" size="md" alignSelf="center">
            <Link href="/">
              <a href="/">Learn Build</a>
            </Link>
          </Heading>
        </Stack>
      </Flex>

      <Box display={['block', 'block', 'flex', 'none']} onClick={handleToggle}>
        <svg
          fill="white"
          width="23px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display={[displayFlex, displayBlock, displayFlex, 'flex']}
        width={{ sm: 'full', md: 'auto' }}
        alignItems="center"
        flexGrow={1}
        flexDir={['column', 'column', 'row', 'row']}
      >
        <NavigationItem href="/about">About</NavigationItem>
        <NavigationItem href="/search">Search</NavigationItem>
        <NavigationItem href="/tags">Tags</NavigationItem>
      </Box>

      {/* FIXME(Renzo): Setting display to "flex" causes issues in mobile */}
      <Stack display={['none', 'none', 'none', 'flex']} isInline>
        <NavigationButton show={show}>
          <a href="/api/login">Log in</a>
        </NavigationButton>
        <NavigationButton show={show}>
          <a href="/api/logout">Log out</a>
        </NavigationButton>
        <NavigationButton show={show}>Sign up</NavigationButton>
      </Stack>
    </Flex>
  );
}

export default NavigationBar;
