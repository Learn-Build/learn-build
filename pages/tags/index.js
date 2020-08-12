import { Heading, Box } from "@chakra-ui/core";
import Container from "../../components/Container";
import ResponsiveHeading from "../../components/ResponsiveHeading";
import NavigationBar from "../../components/NavigationBar";
import TagCard from "../../components/TagCard";
import { fetchTags } from "../../clients";

export default function Tags({ tags }) {
  return (
    <div>
      <NavigationBar />
      <Container desktopWidth={70}>
        <Box>
        <ResponsiveHeading>Tags</ResponsiveHeading>
          {tags.map((tag) => (
            <TagCard tag={tag} key={tag.id} />
          ))}
        </Box>
      </Container>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      tags: await fetchTags(),
    },
  };
}
