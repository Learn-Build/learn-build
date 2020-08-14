/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  Icon,
  Input,
  InputGroup,
  Box,
  InputLeftElement,
  Stack,
} from '@chakra-ui/core';
import NavigationBar from '../components/NavigationBar';
import Container from '../components/Container';
import CardComponent from '../components/CardComponent';
import ResponsiveHeading from '../components/ResponsiveHeading';
import Builds from '../components/Builds';
import TagFilterButton from '../components/TagFilterButton';
import { fetchBuilds, fetchTags, fetchUsers } from '../clients';
import {
  BuildListProps,
  TagListProps,
  UserListProps,
} from '../constants/propTypes';

export default function Search({ builds, tags, users }) {
  const [nameQuery, setNameQuery] = useState('');
  const [builderQuery, setBuilderQuery] = useState('');
  const [tagFilters, setTagFilters] = useState([]);

  function handleNameQueryChange(event) {
    setNameQuery(event.target.value);
  }

  function handleBuilderQueryChange(event) {
    setBuilderQuery(event.target.value);
  }

  function handleTagFilterChange(tagId) {
    if (tagFilters.includes(tagId)) {
      setTagFilters(tagFilters.filter((tagFilter) => tagFilter !== tagId));
    } else {
      setTagFilters([...tagFilters, tagId]);
    }
  }

  // TODO(Renzo?): refactor this horrible mess
  function filterBuilds() {
    return builds
      .filter((build) => build.name.toLowerCase().includes(nameQuery))
      .filter((build) => users
        .find((user) => build.userId === user.id)
        .name.toLowerCase()
        .includes(builderQuery)).filter((build) => {
        // TODO(Renzo?): I'm not smart enough to refactor this with array-only methods so... todo
        // eslint-disable-next-line no-restricted-syntax
        for (const tag of tagFilters) {
          if (!build.tagIds.some((tagId) => tagId === tag)) return false;
        }
        return true;
      });
  }

  return (
    <div>
      <NavigationBar />
      <Container leftColumn={30} rightColumn={70}>
        <Box>
          <ResponsiveHeading>Options</ResponsiveHeading>
          <CardComponent>
            <ResponsiveHeading as="h4" size="md">
              Filter by builder
            </ResponsiveHeading>

            <InputGroup>
              <InputLeftElement>
                <Icon name="search" color="gray.400" />
              </InputLeftElement>
              <Input
                value={builderQuery}
                placeholder="Search builder's name here..."
                size="md"
                onChange={handleBuilderQueryChange}
              />
            </InputGroup>

            <ResponsiveHeading as="h4" size="md">
              Filter by tag
            </ResponsiveHeading>
            <Stack>
              {tags.map((tag) => (
                <TagFilterButton
                  key={tag.id}
                  tag={tag}
                  handleChange={handleTagFilterChange}
                />
              ))}
            </Stack>
          </CardComponent>
        </Box>

        <Box>
          <ResponsiveHeading>Search</ResponsiveHeading>
          <InputGroup>
            <InputLeftElement>
              <Icon name="search" color="gray.400" />
            </InputLeftElement>
            <Input
              value={nameQuery}
              placeholder="Find a build to learn..."
              size="lg"
              onChange={handleNameQueryChange}
            />
          </InputGroup>
          <Builds builds={filterBuilds()} tags={tags} users={users} header="" />
        </Box>
      </Container>
    </div>
  );
}

Search.propTypes = {
  builds: BuildListProps.isRequired,
  tags: TagListProps.isRequired,
  users: UserListProps.isRequired,
};
// TODO(Renzo): handle promises once data fetching returns actual data
export async function getStaticProps() {
  return {
    props: {
      builds: await fetchBuilds(),
      tags: await fetchTags(),
      users: await fetchUsers(),
    },
  };
}
