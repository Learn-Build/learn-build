/* eslint-disable prettier/prettier */
import React from 'react';
import { Box, Heading, Text, Flex, Image, Stack } from '@chakra-ui/core';
import PropTypes from 'prop-types';
import Container from '../../components/Container';
import NavigationBar from '../../components/NavigationBar';
import ResponsiveHeading from '../../components/ResponsiveHeading';
import TogglableButton from '../../components/TogglableButton';
import CardComponent from '../../components/CardComponent';
import { fetchBuilds, fetchResources } from '../../clients';
import { ResourceListProps } from '../../constants/propTypes';

export default function Build({ name, description, imageUrl, resources }) {
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
          <Stack py={5} px={5} spacing={5}>
            <TogglableButton
              enabledText="Favorited"
              disabledText="Favorite"
              size="md"
            />
            <TogglableButton
              enabledText="Saved"
              disabledText="Save"
              size="md"
            />
          </Stack>
        </Box>
      </Flex>
      <Container desktopWidth={desktopWidth}>
        {/* Resources */}
        <Box>
          <ResponsiveHeading>Resources</ResponsiveHeading>
          {resources.map((resource) => (
            <CardComponent key={resource.id}>{resource.title}</CardComponent>
          ))}
        </Box>

        {/* Sidebar - notes and related builds? */}
        <Box>
          <ResponsiveHeading>Notes</ResponsiveHeading>
        </Box>
      </Container>
    </div>
  );
}

Build.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  resources: ResourceListProps.isRequired,
};

Build.defaultProps = {
  name: 'Build',
  description: 'This is a build',
  imageUrl: '/assets/learn_build_logo.svg',
};

export async function getStaticPaths() {
  const builds = await fetchBuilds();
  const paths = builds.map((build) => `/build/${build.name}`);
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const buildName = context.params.name;
  const builds = await fetchBuilds();
  const { name, description, resourceIds } = builds.find(
    (t) => t.name === buildName,
  );

  const allResources = await fetchResources();
  const resources = allResources.filter((resource) => resourceIds.includes(resource.id));

  return {
    props: {
      name,
      description,
      resources,
    },
  };
}
