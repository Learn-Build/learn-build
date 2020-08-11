import Link from "next/link";
import { Heading, List, ListItem } from "@chakra-ui/core";
import Container from "../../components/Container";
import NavigationBar from "../../components/NavigationBar";
import { fetchTags } from "../../clients";

export default function Tags({ tags }) {
  return (
    <div>
      <NavigationBar />
      <Container>
        <Heading as="h2">Tags</Heading>
        <List styleType="none">
          {tags.map((tag) => (
            <ListItem key={tag.id} textAlign="center">
              <Link href="/tags/[tag]" as={`/tags/${tag.name}`}>
                <a>{tag.name}</a>
              </Link>
            </ListItem>
          ))}
        </List>
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
