import { Box, Button } from '@chakra-ui/core';

export default function NavigationButton({ show, children }) {
  return (
    <Box
      display={{ sm: show ? "block" : "none", md: "block" }}
      mt={{ base: 4, md: 0 }}
      mr={2}
    >
      <Button bg="transparent" border="1px">
        {children}
      </Button>
    </Box>
  );
}