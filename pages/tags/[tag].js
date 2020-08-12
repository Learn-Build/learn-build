import { Box, Flex, Heading, Image } from "@chakra-ui/core";
import NavigationBar from "../../components/NavigationBar";
import Builds from "../../components/Builds";
import TogglableButton from "../../components/TogglableButton";
import { fetchBuilds, fetchTags } from "../../clients";

// TODO(Renzo): Determine if user is following tag initially

export default function Tag({ builds, tags, id, name, description, imageUrl }) {
  return (
    <div>
      <NavigationBar />
        <Flex flexDir="column" alignItems="center">
          <Flex 
            bg="pink.700"
            textAlign="center"
            width="100%"
            color="white"
            py={40}
            px={3}
            flexDir="column"
            alignItems="center"
          >
            <Image 
              src={imageUrl}
              fallbackSrc="/assets/learn_build_logo.svg"
              alignSelf="center"
            />
            <Heading 
              as="h1" 
              fontWeight="700" 
              fontSize={['50px', '60px']}
            >
              {name}
            </Heading>

            <Heading 
              as="h2" 
              fontWeight="light"
            >
              {description}
            </Heading>

            <TogglableButton 
              enabledText={'Following'}
              disabledText={'Follow'}
              initialState={false}
              size="lg"
              fontSize="lg"
              variantColor="white"
              props={{ mt: 8 }}
            />
          </Flex>
          <Box
            width={['95%', '70%']}
            my={5}
          >
            {builds.length === 0 && (
            <Heading
              as="h3"
              fontWeight="light"
              textAlign="center"
              my={10}
            >
              Nothing yet. Be the first builder for this tag!
            </Heading>)}

            <Builds
              builds={builds}
              tags={tags}
              header={builds.length > 0 ? `Builds for ${name}` : ''}
            />
          </Box>
        </Flex>
    </div>
  );
}

export async function getStaticPaths() {
  const tags = await fetchTags();
  const paths = tags.map((tag) => `/tags/${tag.name}`);
  // TODO(Renzo): Create custom fallback page
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  // Fetch tag information
  const tagName = context.params.tag;
  const tags = await fetchTags();
  // TODO(Renzo): Get image URL once in data
  const { id, name, description } = tags.find((t) => t.name === tagName);

  // Fetch and filter builds with tag
  const builds = await fetchBuilds();
  const filteredBuilds = builds.filter((build) => (
    build.tagIds.some((tagId) => tagId === id)
  ));
  
  return { 
    props: {
      builds: filteredBuilds,
      tags,
      id,
      name,
      description,
    }
  };
}
