import React from 'react';
import { Box, Flex, Heading, Image } from '@chakra-ui/core';
import PropTypes from 'prop-types';
import NavigationBar from '../../components/NavigationBar';
import Builds from '../../components/Builds';
import TogglableButton from '../../components/TogglableButton';
import { fetchBuilds, fetchTags, fetchUsers } from '../../clients';
import {
  BuildListProps,
  TagListProps,
  UserListProps,
} from '../../constants/propTypes';

// TODO(Renzo): Determine if user is following tag initially

export default function Tag({
  builds,
  tags,
  users,
  name,
  description,
  imageUrl,
}) {
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
            users={users}
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
  users: UserListProps.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
};

Tag.defaultProps = {
  imageUrl: '/assets/learn_build_logo.svg',
};

export async function getStaticPaths() {
  const allTagsData = await fetchTags().then((r) => r.data);
  const tags = allTagsData.map((t) => ({
    ...t,
    id: t._id,
  }));
  const paths = tags.map((tag) => `/tags/${tag.name}`);
  // TODO(Renzo): Create custom fallback page
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  // Fetch tag information
  const tagName = context.params.tag;
  const allTagsData = await fetchTags().then((r) => r.data);
  const tags = allTagsData.map((t) => ({
    ...t,
    id: t._id,
  }));
  // TODO(Renzo): Get image URL once in data
  const { id, name, description } = tags.find((t) => t.name === tagName);

  // Fetch and filter builds with tag
  const allBuildsData = await fetchBuilds().then((r) => r.data);
  const builds = allBuildsData.map((b) => ({
    ...b,
    id: b._id,
    userId: b.user_id,
    favoriteCount: b.favorite_count,
    resourceIds: [],
    tagIds: [],
  }));
  // eslint-disable-next-line prettier/prettier
  const filteredBuilds = builds.filter((build) => build.tagIds.some((tagId) => tagId === id));

  const allUsersData = await fetchUsers().then((r) => r.data);
  const users = allUsersData.map((u) => ({
    ...u,
    id: u._id,
  }));

  return {
    props: {
      builds: filteredBuilds,
      tags,
      users,
      name,
      description,
    },
  };
}
