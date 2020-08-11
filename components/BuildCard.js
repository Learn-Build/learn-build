import { Badge, Box, Stack } from "@chakra-ui/core";

function BuildCard({ build, tagNames }) {
  console.log(tagNames);
  return (
    <Box 
      borderWidth="1px" 
      rounded="lg" 
      p={5} 
      my={5}
      mr={5}
    >
      <Stack isInline>
        {tagNames.map((tag) => (
          <Badge>{tag}</Badge>
        ))}
      </Stack>

      <Box as="h3" fontSize="xl" fontWeight="bold">
        {build.name}
      </Box>

      <Box fontSize="sm" color="gray.500">
        {build.builder}
      </Box>

      <Box>
        {build.description}  
      </Box>

    </Box>
  );
}

export default BuildCard;