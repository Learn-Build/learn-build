import { useState } from "react";
import { Icon, Input, InputGroup, Box, InputLeftElement } from "@chakra-ui/core";
import NavigationBar from "../components/NavigationBar";
import Container from "../components/Container";
import ResponsiveHeading from "../components/ResponsiveHeading";
import Builds from "../components/Builds";
import { fetchBuilds, fetchTags } from "../clients"

export default function Search({ builds, tags }) {
  const [query, setQuery] = useState('');

  function handleQueryChange(event) {
    setQuery(event.target.value);
  }

  function filterBuilds() {
    return builds.filter(build => (
      build.name.toLowerCase().includes(query)
    ));
  }

  return (
    <div>
      <NavigationBar />
      <Container leftColumn={30} rightColumn={70}>
        <Box>
          <ResponsiveHeading>Options</ResponsiveHeading>
        </Box>

        <Box>
          <ResponsiveHeading>Search</ResponsiveHeading>
          <InputGroup>
            <InputLeftElement children={<Icon name="search" color="gray.400" />} />
            <Input
              value={query}
              placeholder="Find a build to learn..."
              size="lg"
              onChange={handleQueryChange}  
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
