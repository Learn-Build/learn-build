import { Box, Heading, Text, Flex, Button, Image, Stack } from "@chakra-ui/core";
import Container from "../../components/Container";
import NavigationBar from "../../components/NavigationBar";
import ResponsiveHeading from "../../components/ResponsiveHeading";
import TogglableButton from "../../components/TogglableButton";
import { fetchBuilds } from "../../clients";

export default function Build({ id, name, description, imageUrl=null }) {

  const desktopWidth = 90;

  return (
    <div>
      <NavigationBar />
      <Flex
        width={['95%', `${desktopWidth}%`]}
        mx="auto"
        maxH="200px"
        flexDir="row"
        borderWidth="1px"
        boxShadow="sm"
        px={5}
        py={3}
        my={5}
      >
        {/* Image */}
        <Box flex={1}>
          <Image 
            src={imageUrl}
            fallbackSrc="/assets/learn_build_logo.svg"
            height="100%"
          />
        </Box>

        {/* Title, description, tags */}
        <Box flex={3}>
          <Heading as="h1">{name}</Heading>
          <Text>{description}</Text>
        </Box>

        {/* Likes, save buttons */}
        <Box flex={1}>
          <Stack
            py={5}
            px={5}
            spacing={5}
          >
            <TogglableButton 
              enabledText={'Favorited'}
              disabledText={'Favorite'}
              size="md"
              props={{ mb: 3 }}
            />
            <TogglableButton 
              enabledText={'Saved'}
              disabledText={'Save'}
              size="md"
            />
          </Stack>
        </Box>
      </Flex>
      <Container desktopWidth={desktopWidth}>
        {/* Resources */}
        <Box>
          <ResponsiveHeading>
            Resources
          </ResponsiveHeading>
        </Box>

        {/* Sidebar - notes and related builds? */}
        <Box>
          <ResponsiveHeading>
            Notes
          </ResponsiveHeading>
        </Box>
      </Container>
    </div>
  );
}

export async function getStaticPaths() {
  const builds = await fetchBuilds();
  const paths = builds.map((build) => `/build/${build.name}`);
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const buildName = context.params.name;
  const builds = await fetchBuilds();
  const buildData = builds.find((t) => t.name === buildName);
  return { props: buildData };
}
