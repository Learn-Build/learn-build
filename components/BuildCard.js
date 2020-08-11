import { 
  Badge, 
  Box,
  Flex,
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

  const desktopColumns = '15% 75% 10%';
  const mobileColumns = '10% 75% 15%';
  const responsiveCardColumns = [mobileColumns, mobileColumns, mobileColumns, desktopColumns];

  const headerFontSize = ['md', 'md', 'lg', 'xl'];
  const bodyFontSize = ['xs', 'xs', 'sm', 'sm'];

  return (
    <Box 
      borderWidth="1px" 
      rounded="lg" 
      p={[3, 3, 3, 5]} 
      my={5}
      mr={[0, 0, 0, 5]}
      boxShadow="md"
    >
      <Grid templateColumns={responsiveCardColumns}>
        <LinkWrapper href={linkHref} as={linkAs}>
          <Image
            src={build.imageUrl}
            fallbackSrc="assets/learn_build_logo.svg" 
            alignSelf="center"
            verticalAlign="middle"
            pr={3}
          />
        </LinkWrapper>

        <LinkWrapper href={linkHref} as={linkAs}>
          <Box>
            <Flex flexDir="row" wrap="wrap">
              {tagNames.map((tag) => (
                <Badge mr={1}>{tag}</Badge>
              ))}
            </Flex>

            <Box as="h3" fontSize={headerFontSize} fontWeight="bold">
              {build.name}
            </Box>

            <Box as="h2" fontSize={bodyFontSize} color="gray.500">
              {build.builder}
            </Box>

            <Box as="p" fontSize={bodyFontSize}>
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
            <Text 
              fontSize="xs"
              alignSelf="center"
              display={['none', 'block', 'block', 'block']}
            >
              Save
            </Text>
          </Stack>
        </Stack>  
      </Grid>
    </Box>
  );
}

export default BuildCard;