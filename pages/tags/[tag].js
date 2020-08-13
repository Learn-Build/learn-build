import React from 'react';
import { Box, Flex, Heading, Image } from '@chakra-ui/core';
import PropTypes from 'prop-types';
import NavigationBar from '../../components/NavigationBar';
import Builds from '../../components/Builds';
import TogglableButton from '../../components/TogglableButton';
import { fetchBuilds, fetchTags } from '../../clients';
import { BuildListProps, TagListProps } from '../../constants/propTypes';

// TODO(Renzo): Determine if user is following tag initially

export default function Tag({ builds, tags, name, description, imageUrl }) {
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
          <Heading as="h1" fontWeight="700" fontSize={['50px', '60px']}>
            {name}
          </Heading>

          <Heading as="h2" fontWeight="light">
            {description}
          </Heading>

          <TogglableButton
            enabledText="Following"
            disabledText="Follow"
            disabledVariant="outilne"
            initialState={false}
            size="lg"
            fontSize="xl"
            my={5}
          />
        </Flex>
        <Box width={['95%', '70%']} my={5}>
          {builds.length === 0 && (
            <Heading as="h3" fontWeight="light" textAlign="center" my={10}>
              Nothing yet. Be the first builder for this tag!
            </Heading>
          )}

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

Tag.propTypes = {
  builds: BuildListProps.isRequired,
  tags: TagListProps.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
};

Tag.defaultProps = {
  imageUrl: '/assets/learn_build_logo.svg',
};

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
  // eslint-disable-next-line prettier/prettier
  const filteredBuilds = builds.filter((build) => build.tagIds.some((tagId) => tagId === id));

  return {
    props: {
      builds: filteredBuilds,
      tags,
      name,
      description,
    },
  };
}
