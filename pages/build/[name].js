/* eslint-disable prettier/prettier */
import React from 'react';
import { Box, Heading, Text, Image, Stack, Flex, useToast } from '@chakra-ui/core';
import PropTypes from 'prop-types';
import HeaderGrid from '../../components/HeaderGrid';
import Container from '../../components/Container';
import NavigationBar from '../../components/NavigationBar';
import TagBadges from '../../components/TagBadges';
import LinkWrapper from '../../components/LinkWrapper';
import ResponsiveHeading from '../../components/ResponsiveHeading';
import TogglableButton from '../../components/TogglableButton';
import ResourceCard from '../../components/ResourceCard';
import { fetchBuilds, fetchResources, fetchUsers, fetchTags } from '../../clients';
import { ResourceListProps, UserProps } from '../../constants/propTypes';
import { RESPONSIVE_TEXT_ALIGN } from '../../styles/responsiveStyles';
import { FAVORITED_TOAST, SAVED_TOAST, UNFAVORITED_TOAST, UNSAVED_TOAST } from '../../constants/toasts';

function Build({ name, builder, description, imageUrl, resources, notes, tagNames }) {
  const toast = useToast();

  const desktopWidth = 90;

  const emptyNotesText = 'No notes for this build.';
  const noResourcesText = 'No resources in this build yet.';

  const builderPageHref = '/[user]';
  const builderPageAs = `/${builder.id}`;

  return (
    <div>
      <NavigationBar />
      <HeaderGrid>
        {/* Image */}
        <Box mx="auto" p={1}>
          <Image
            src={imageUrl}
            fallbackSrc="/assets/learn_build_logo.svg"
            mx="auto"
          />
        </Box>

        {/* Title, description, tags */}
        <Box textAlign={['center', 'center', 'center', 'left']} p={4}>
          <Heading as="h1" size="2xl">{name}</Heading>
          <LinkWrapper href={builderPageHref} as={builderPageAs}>
            <Text>{builder.name}</Text>
          </LinkWrapper>
          <Text fontSize={18} my={2} mb={3}>{description}</Text>
          <TagBadges tagNames={tagNames} fontSize={16} flexDir={['column', 'column', 'column', 'row']} />
        </Box>

        {/* Likes, save buttons */}
        <Box>
          <Stack px={5}>
            <TogglableButton
              enabledText="Favorited"
              disabledText="Favorite"
              size="md"
              onClick={(enabled) => (enabled ? toast(UNFAVORITED_TOAST) : toast(FAVORITED_TOAST))}
            />
            <TogglableButton
              enabledText="Saved"
              disabledText="Save"
              size="md"
              onClick={(enabled) => (enabled ? toast(UNSAVED_TOAST) : toast(SAVED_TOAST))}
            />
          </Stack>
        </Box>
      </HeaderGrid>
      <Container desktopWidth={desktopWidth} leftColumn={70} rightColumn={30}>
        {/* Resources */}
        <Box>
          <ResponsiveHeading showDivider>Resources</ResponsiveHeading>
          {!resources.length && <Text textAlign={RESPONSIVE_TEXT_ALIGN}>{noResourcesText}</Text>}
          <Flex flexWrap="wrap">
            {resources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </Flex>
        </Box>

        {/* Sidebar */}
        <Box>
          <ResponsiveHeading showDivider>Notes</ResponsiveHeading>
          <Text fontStyle="light" textAlign={RESPONSIVE_TEXT_ALIGN} mb={10}>
            {notes || (emptyNotesText)}
          </Text>
        </Box>
      </Container>
    </div>
  );
}

Build.propTypes = {
  name: PropTypes.string.isRequired,
  builder: UserProps.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  resources: ResourceListProps.isRequired,
  notes: PropTypes.string,
  tagNames: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Build.defaultProps = {
  imageUrl: '/assets/learn_build_logo.svg',
  notes: '',
};

export async function getStaticPaths() {
  const builds = await fetchBuilds();
  const paths = builds.map((build) => `/build/${build.name}`);
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const buildName = context.params.name;
  const builds = await fetchBuilds();
  // TODO(Renzo): extract notes once they are added to schema
  const { name, userId, description, resourceIds, tagIds } = builds.find(
    (build) => build.name === buildName,
  );

  const allResources = await fetchResources();
  const resources = allResources.filter((resource) => resourceIds.includes(resource.id));

  const allTags = await fetchTags();
  const tags = allTags.filter((tag) => tagIds.includes(tag.id));
  const tagNames = tags.map((tag) => tag.name);

  const allUsers = await fetchUsers();
  const builder = allUsers.find((user) => user.id === userId);

  return {
    props: {
      name,
      builder,
      description,
      resources,
      tagNames,
    },
  };
}

export default Build;
