import { Heading, Box } from "@chakra-ui/core";
import NavigationBar from "../components/NavigationBar";
import Container from "../components/Container";
import ResponsiveHeading from "../components/ResponsiveHeading";
import Builds from "../components/Builds";
import { fetchBuilds, fetchTags } from "../clients"

export default function Search({ builds, tags }) {
  return (
    <div>
      <NavigationBar />
      <Container leftColumn={30} rightColumn={70}>
        <Box>
          <ResponsiveHeading>Options</ResponsiveHeading>
        </Box>

        <Box>
          <ResponsiveHeading>Search</ResponsiveHeading>
          <Builds builds={builds} tags={tags} header={''} />
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
