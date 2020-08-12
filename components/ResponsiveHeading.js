import { Heading } from "@chakra-ui/core";

function ResponsiveHeading({ children }) {
  const responsiveAlign = ['center', 'center', 'center', 'left'];

  return (
    <Heading
      as="h2"
      mb={2}
      mt={4}
      textAlign={responsiveAlign}
    >
      {children}
    </Heading>
  );
}

export default ResponsiveHeading;