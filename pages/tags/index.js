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
        <Heading as="h2">Tags</Heading>
          <List styleType="none">
            {tags.map((tag) => (
              <ListItem key={tag.id}>
                <Link href="/tags/[tag]" as={`/tags/${tag.name}`}>
                  <a>{tag.name}</a>
                </Link>
              </ListItem>
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
