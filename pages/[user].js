import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Box, Text, Divider } from '@chakra-ui/core';
import NavigationBar from '../components/NavigationBar';
import HeaderGrid from '../components/HeaderGrid';
import ResponsiveHeading from '../components/ResponsiveHeading';
import Container from '../components/Container';
import ResourceCard from '../components/ResourceCard';
import { RESPONSIVE_TEXT_ALIGN } from '../styles/responsiveStyles';
import { fetchBuilds, fetchUsers, fetchTags, fetchResources } from '../clients';
import {
  BuildListProps,
  TagListProps,
  UserListProps,
  ResourceListProps,
} from '../constants/propTypes';
import Builds from '../components/Builds';

export default function User({
  id,
  name,
  email,
  createdBuilds,
  favoritedBuilds,
  uploadedResources,
  favoritedResources,
  tags,
  users,
}) {
  return (
    <div>
      <NavigationBar />
      <HeaderGrid>
        <Avatar size="xl" name={name} m="auto" />
        <Box>
          <ResponsiveHeading showDivider>{name}</ResponsiveHeading>
          <Text textAlign={RESPONSIVE_TEXT_ALIGN} mb={5}>
            {email}
          </Text>
        </Box>
        <Box>
          <Text textAlign={RESPONSIVE_TEXT_ALIGN}>{`ID: ${id}`}</Text>
        </Box>
      </HeaderGrid>

      {/* Creations/uploads */}
      <Container>
        {/* User's created builds */}
        <Box>
          <Builds builds={createdBuilds} tags={tags} users={users} />
          {!createdBuilds && (
            <Text textAlign={RESPONSIVE_TEXT_ALIGN}>
              {`${name} hasn't made any builds... yet.`}
            </Text>
          )}
        </Box>

        {/* User's resources */}
        <Box>
          <ResponsiveHeading>Resources</ResponsiveHeading>
          <Text textAlign={RESPONSIVE_TEXT_ALIGN}>
            {!uploadedResources && (
              <Text textAlign={RESPONSIVE_TEXT_ALIGN}>
                {`${name} hasn't uploaded any resources... yet.`}
              </Text>
            )}
            {uploadedResources
              && uploadedResources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
          </Text>
        </Box>
      </Container>

      <Divider />

      {/* User's favorites */}
      <Container>
        {/* User's favorited builds */}
        <Box>
          <Builds
            builds={favoritedBuilds}
            tags={tags}
            users={users}
            header="Favorite Builds"
          />
          {!favoritedBuilds && (
            <Text textAlign={RESPONSIVE_TEXT_ALIGN}>
              {`${name} hasn't favorited any builds... yet.`}
            </Text>
          )}
        </Box>

        {/* User's favorited resources */}
        <Box>
          <ResponsiveHeading>Favorite Resources</ResponsiveHeading>
          <Text textAlign={RESPONSIVE_TEXT_ALIGN}>
            {!favoritedResources && (
              <Text textAlign={RESPONSIVE_TEXT_ALIGN}>
                {`${name} hasn't favorited any resources... yet.`}
              </Text>
            )}
            {favoritedResources
              && favoritedResources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
          </Text>
        </Box>
      </Container>
    </div>
  );
}

User.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  createdBuilds: BuildListProps,
  favoritedBuilds: BuildListProps,
  uploadedResources: ResourceListProps,
  favoritedResources: ResourceListProps,
  tags: TagListProps.isRequired,
  users: UserListProps.isRequired,
};

User.defaultProps = {
  createdBuilds: null,
  favoritedBuilds: null,
  uploadedResources: null,
  favoritedResources: null,
};

// TODO(Renzo): add fallback page at some point?

export async function getStaticPaths() {
  const allUsersData = await fetchUsers().then((r) => r.data);
  const users = allUsersData.map((u) => ({
    ...u,
    id: u._id,
  }));
  const paths = users.map((user) => `/${user.id}`);
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const userId = context.params.user;
  const allUsersData = await fetchUsers().then((r) => r.data);
  const users = allUsersData.map((u) => ({
    ...u,
    id: u._id,
  }));
  const { id, name, email, buildsFavorited, resourcesFavorited } = users.find(
    (t) => t.id === userId,
  );

  // Get builds if available
  const allBuildsData = await fetchBuilds().then((r) => r.data);
  const allBuilds = allBuildsData.map((b) => ({
    ...b,
    id: b._id,
    userId: b.user_id,
    favoriteCount: b.favorite_count,
    resourceIds: [],
    tagIds: [],
  }));

  let favoritedBuilds = null;

  if (buildsFavorited) {
    favoritedBuilds = allBuilds.filter((build) =>
      buildsFavorited.includes(build.id),
    );
  }

  // Get resources if available
  const allResources = await fetchResources();
  let favoritedResources = null;

  if (resourcesFavorited) {
    favoritedResources = allResources.filter((resource) =>
      resourcesFavorited.includes(resource.id),
    );
  }

  const allTagsData = await fetchTags().then((r) => r.data);
  const tags = allTagsData.map((t) => ({
    ...t,
    id: t._id,
  }));

  return {
    props: {
      id,
      name,
      email,
      favoritedBuilds,
      favoritedResources,
      tags,
      users,
    },
  };
}
