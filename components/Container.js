import { Flex } from '@chakra-ui/core';

function Container(props) {
  return (
    <Flex 
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      {...props}
    />
  );
}

export default Container;
