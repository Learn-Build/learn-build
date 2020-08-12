import { useState } from "react";
import { Icon, Input, InputGroup, Box, InputLeftElement, Stack } from "@chakra-ui/core";
import NavigationBar from "../components/NavigationBar";
import Container from "../components/Container";
import CardComponent from "../components/CardComponent";
import ResponsiveHeading from "../components/ResponsiveHeading";
import Builds from "../components/Builds";
import TagFilterButton from "../components/TagFilterButton";
import { fetchBuilds, fetchTags } from "../clients"

export default function Search({ builds, tags }) {
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
      setTagFilters(tagFilters.filter((tagFilter) => (
        tagFilter !== tagId
      )));
    } else {
      setTagFilters([...tagFilters, tagId]);
    }
    console.log(tagFilters);
  }

  function filterBuilds() {
    return builds.filter((build) => (
      build.name.toLowerCase().includes(nameQuery)
    )).filter((build) => (
      build.builder.toLowerCase().includes(builderQuery)
    )).filter((build) => {
      for (let tag of tagFilters) {
        if (!build.tagIds.some((tagId) => (tagId === tag)))
          return false;
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
            <ResponsiveHeading
              as={'h4'}
              size={'md'}
              props={{mt: 0}}
            >
              Filter by builder
            </ResponsiveHeading>

            <InputGroup>
              <InputLeftElement children={<Icon name="search" color="gray.400" />} />
              <Input
                value={builderQuery}
                placeholder="Search builder's name here..."
                size="md"
                onChange={handleBuilderQueryChange}  
              />
            </InputGroup>

            <ResponsiveHeading
              as={'h4'}
              size={'md'}
            >
              Filter by tag
            </ResponsiveHeading>
            <Stack>
              {tags.map(tag => (
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
            <InputLeftElement children={<Icon name="search" color="gray.400" />} />
            <Input
              value={nameQuery}
              placeholder="Find a build to learn..."
              size="lg"
              onChange={handleNameQueryChange}  
            />
          </InputGroup>
          <Builds builds={filterBuilds()} tags={tags} header={''} />
        </Box>
      </Container>
    </div>
  );
}

// TODO(Renzo): handle promises once data fetching returns actual data
export async function getStaticProps() {
  return {
    props: {
      builds: await fetchBuilds(),
      tags: await fetchTags()
    },
  };
}
