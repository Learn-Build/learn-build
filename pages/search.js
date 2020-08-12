import { useState } from "react";
import { Icon, Input, InputGroup, Box, InputLeftElement } from "@chakra-ui/core";
import NavigationBar from "../components/NavigationBar";
import Container from "../components/Container";
import CardComponent from "../components/CardComponent";
import ResponsiveHeading from "../components/ResponsiveHeading";
import Builds from "../components/Builds";
import { fetchBuilds, fetchTags } from "../clients"

export default function Search({ builds, tags }) {
  const [nameQuery, setNameQuery] = useState('');
  const [builderQuery, setBuilderQuery] = useState('');

  function handleNameQueryChange(event) {
    setNameQuery(event.target.value);
  }

  function handleBuilderQueryChange(event) {
    setBuilderQuery(event.target.value);
  }

  function filterBuilds() {
    return builds.filter(build => (
      build.name.toLowerCase().includes(nameQuery)
    )).filter(build => (
      build.builder.toLowerCase().includes(builderQuery)
    ));
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
              Filter by topic
            </ResponsiveHeading>
            
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
