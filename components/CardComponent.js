import { Box } from "@chakra-ui/core";

function CardComponent({ children }) {
  return (
    <Box 
      borderWidth="1px" 
      rounded="lg" 
      p={[3, 3, 3, 5]} 
      my={5}
      mr={[0, 0, 0, 5]}
      boxShadow="md"
    >
      {children}
    </Box>
  );
}

export default CardComponent;