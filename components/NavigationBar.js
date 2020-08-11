import { useState } from 'react';
import Link from 'next/link';
import { Box, Heading, Flex, Icon, Stack } from '@chakra-ui/core';
import NavigationButton from './NavigationButton';
import NavigationItem from './NavigationItem';

// TODO(Renzo): add logo to navbar
// TODO(Renzo): replace search with search bar or move elsewhere

// Taken and modified from here:
// https://chakra-ui.com/recipes#responsive-header-with-chakra-ui
function NavigationBar(props) {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      py="0.8rem"
      px="2rem"
      bg="pink.700"
      color="white"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Stack isInline>
          <Link href="/">
            <Icon 
              name="logo" 
              size="50px" 
              mr={2}
              color="pink.200"
              focusable
            />  
          </Link>
          <Heading as="h1" size="lg" alignSelf="center">
            <Link href="/">
              <a>Learn Build</a>
            </Link>
          </Heading>
        </Stack>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <svg
          fill="white"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
      >
        <NavigationItem href="/about">
          About
        </NavigationItem>
        <NavigationItem href="/search">Search</NavigationItem>
        <NavigationItem href="/tags">Tags</NavigationItem>
      </Box>

      <NavigationButton show={show}>Log in</NavigationButton>
      <NavigationButton show={show}>Sign up</NavigationButton>

    </Flex>
  );
}

export default NavigationBar;
