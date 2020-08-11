import { Badge, Box, Grid, Image, Stack, Icon } from "@chakra-ui/core";

// TODO(Renzo): Add better image handling

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
      <Grid templateColumns="13% 87%">
        <Image 
          src={build.imageUrl}
          fallbackSrc="assets/learn_build_logo.svg" 
          alignSelf="center"
          pr={3} 
        />
        <Box>
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
      </Grid>

    </Box>
  );
}

export default BuildCard;