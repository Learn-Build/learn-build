import Link from "next/link";
import { Heading, List, ListItem, Box } from "@chakra-ui/core";
import Container from "../../components/Container";
import NavigationBar from "../../components/NavigationBar";
import TagCard from "../../components/TagCard";
import { fetchTags } from "../../clients";

export default function Tags({ tags }) {
  return (
    <div>
      <NavigationBar />
      <Container desktopWidth={70}>
        <Box>
        <Heading as="h1" mt={4}>Tags</Heading>
          <List styleType="none">
            {tags.map((tag) => (
              <TagCard tag={tag} key={tag.id} />
            ))}
          </List>
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
