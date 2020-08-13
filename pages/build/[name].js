/* eslint-disable prettier/prettier */
import React from 'react';
import { Box, Heading, Text, Grid, Image, Stack, Flex } from '@chakra-ui/core';
import PropTypes from 'prop-types';
import Container from '../../components/Container';
import NavigationBar from '../../components/NavigationBar';
import ResponsiveHeading from '../../components/ResponsiveHeading';
import TogglableButton from '../../components/TogglableButton';
import ResourceCard from '../../components/ResourceCard';
import { fetchBuilds, fetchResources } from '../../clients';
import { ResourceListProps } from '../../constants/propTypes';

export default function Build({ name, description, imageUrl, resources, notes }) {
  const desktopWidth = 90;
  const desktopColumns = '15% 70% 15%';
  const mobileColumns = '100%';

  const responsiveColumns = [
    mobileColumns,
    mobileColumns,
    mobileColumns,
    desktopColumns,
  ];

  const emptyNotesText = 'No notes for this build.';
  const noResourcesText = 'No resources in this build yet,';

  return (
    <div>
      <NavigationBar />
      <Grid
        templateColumns={responsiveColumns}
        width={['95%', `${desktopWidth}%`]}
        mx="auto"
        borderWidth="1px"
        boxShadow="sm"
        px={5}
        py={3}
        my={5}
      >
        {/* Image */}
        <Box mx="auto" p={1}>
          <Image
            src={imageUrl}
            fallbackSrc="/assets/learn_build_logo.svg"
            mx="auto"
          />
        </Box>

        {/* Title, description, tags */}
        <Box textAlign={['center', 'center', 'center', 'left']}>
          <Heading as="h1">{name}</Heading>
          <Text>{description}</Text>
        </Box>

        {/* Likes, save buttons */}
        <Box>
          <Stack px={5}>
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
      </Grid>
      <Container desktopWidth={desktopWidth} leftColumn={70} rightColumn={30}>
        {/* Resources */}
        <Box>
          <ResponsiveHeading>Resources</ResponsiveHeading>
          <Flex flexWrap="wrap">
            {resources.length === 0 && noResourcesText}
            {resources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </Flex>
        </Box>

        {/* Sidebar - notes and related builds? */}
        <Box>
          <ResponsiveHeading>Notes</ResponsiveHeading>
          <Text fontStyle="light">
            {notes || (emptyNotesText)}
          </Text>
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
  notes: PropTypes.string,
};

Build.defaultProps = {
  name: 'Build',
  description: 'This is a build',
  imageUrl: '/assets/learn_build_logo.svg',
  notes: null,
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

  // TODO(Renzo): figure out how notes are stored
  const notes = null;

  const allResources = await fetchResources();
  const resources = allResources.filter((resource) => resourceIds.includes(resource.id));

  return {
    props: {
      name,
      description,
      resources,
      notes,
    },
  };
}
