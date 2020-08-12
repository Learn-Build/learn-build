import { Heading } from "@chakra-ui/core";

function ResponsiveHeading({ as="h2", size="xl", props, children }) {
  const responsiveAlign = ['center', 'center', 'center', 'left'];

  return (
    <Heading
      as={as}
      mb={2}
      mt={4}
      size={size}
      textAlign={responsiveAlign}
      {...props}
    >
      {children}
    </Heading>
  );
}

export default ResponsiveHeading;