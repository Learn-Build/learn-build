import { 
  Badge, 
  Box, 
  Grid, 
  Image, 
  Stack, 
  IconButton, 
  Text,
  useToast
} from "@chakra-ui/core";
import LinkWrapper from "./LinkWrapper";

// TODO(Renzo): Add better image handling

function BuildCard({ build, tagNames }) {

  const toast = useToast();
  const toastOptions = {
    title: 'Build saved!',
    description: 'You can find it in your saved builds.',
    status: 'success',
    duration: 3000,
    isClosable: true
  };

  const linkHref = '/build/[name]';
  const linkAs = `/build/${build.name}`;

  return (
    <Box 
      borderWidth="1px" 
      rounded="lg" 
      p={5} 
      my={5}
      mr={5}
      boxShadow="md"
    >
      <Grid templateColumns="15% 75% 10%">
        <LinkWrapper href={linkHref} as={linkAs}>
          <Image 
            src={build.imageUrl}
            fallbackSrc="assets/learn_build_logo.svg" 
            alignSelf="center"
            pr={3}
          />
        </LinkWrapper>

        <LinkWrapper href={linkHref} as={linkAs}>
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
        </LinkWrapper>

        <Stack>
          <Stack isInline>
            <IconButton 
              isRound
              size="xs"
              icon="star"
              onClick={() => console.log('Favorited')}
            />
            <Text fontSize="xs" alignSelf="center">
              {build.likeCount}
            </Text>
          </Stack>
          
          <Stack isInline>
            <IconButton 
              isRound
              size="xs"
              icon="add"
              onClick={() => toast(toastOptions)}
            />
            <Text fontSize="xs" alignSelf="center">
              Save
            </Text>
          </Stack>
        </Stack>  
      </Grid>
    </Box>
  );
}

export default BuildCard;