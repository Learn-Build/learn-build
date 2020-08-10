import { useState } from 'react';
import { Box, Heading, Flex, Text } from '@chakra-ui/core';
import NavigationButton from './NavigationButton';

function HeaderItem({ children }) {
  return (
    <Text mt={{ base: 4, md: 0 }} mr={6} display="block" >
      {children}
    </Text>
  );
}

// Taken and modified from here:
// https://chakra-ui.com/recipes#responsive-header-with-chakra-ui
function Header(props) {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="#8A3D7E"  // TODO(Renzo) put this in global theme
      color="white"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg">
          Learn Build
        </Heading>
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
        <HeaderItem>About</HeaderItem>
        <HeaderItem>Builds</HeaderItem>
        <HeaderItem>Tags</HeaderItem>
      </Box>

      <NavigationButton show={show}>Log in</NavigationButton>
      <NavigationButton show={show}>Sign up</NavigationButton>

    </Flex>
  );
}

export default Header;