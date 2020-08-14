import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Box, Text } from '@chakra-ui/core';
import NavigationBar from '../components/NavigationBar';
import HeaderGrid from '../components/HeaderGrid';
import ResponsiveHeading from '../components/ResponsiveHeading';
import Container from '../components/Container';
import { RESPONSIVE_TEXT_ALIGN } from '../styles/responsiveStyles';
import { fetchBuilds, fetchUsers, fetchTags } from '../clients';
import {
  BuildListProps,
  TagListProps,
  UserListProps,
} from '../constants/propTypes';
import Builds from '../components/Builds';

export default function User({ id, name, email, builds, tags, users }) {
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
      <Container>
        {/* User's builds */}
        <Box>
          <Builds builds={builds} tags={tags} users={users} />
          {builds.length === 0 && (
            <Text textAlign={RESPONSIVE_TEXT_ALIGN}>
              {`${name} hasn't made any builds... yet.`}
            </Text>
          )}
        </Box>

        {/* User's following? */}
        <Box>
          <ResponsiveHeading>Tags following</ResponsiveHeading>
          <Text textAlign={RESPONSIVE_TEXT_ALIGN}>
            {`${name} isn't following any tags... yet.`}
          </Text>
          {/* TODO(Renzo): display tags user follows */}
        </Box>
      </Container>
    </div>
  );
}

User.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  builds: BuildListProps.isRequired,
  tags: TagListProps.isRequired,
  users: UserListProps.isRequired,
};

// TODO(Renzo): add fallback page at some point?

export async function getStaticPaths() {
  const users = await fetchUsers();
  const paths = users.map((user) => `/${user.id}`);
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const userId = context.params.user;
  const users = await fetchUsers();
  const { id, name, email } = users.find((t) => t.id === userId);

  const allBuilds = await fetchBuilds();
  const usersBuilds = allBuilds.filter((build) => build.userId === id);

  return {
    props: {
      id,
      name,
      email,
      builds: usersBuilds,
      tags: await fetchTags(),
      users,
    },
  };
}
