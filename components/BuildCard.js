import { Badge, Box, Grid, Image, Stack, IconButton } from "@chakra-ui/core";

// TODO(Renzo): Add better image handling

function BuildCard({ build, tagNames }) {
  return (
    <Box 
      borderWidth="1px" 
      rounded="lg" 
      p={5} 
      my={5}
      mr={5}
      boxShadow="md"
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

          <Stack isInline isReversed>
            <IconButton 
              isRound
              size="xs"
              icon="add"
              onClick={() => console.log('Added')}
            />
            <IconButton 
              isRound
              size="xs"
              icon="star"
              onClick={() => console.log('Favorited')}
            />
          </Stack>
        </Box>  
      </Grid>

    </Box>
  );
}

export default BuildCard;