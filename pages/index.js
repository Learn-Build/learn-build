import Link from "next/link";
import { Box, Grid, Heading, List, ListItem } from "@chakra-ui/core";
import NavigationBar from "../components/NavigationBar";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Builds from "../components/Builds";
import { fetchBuilds, fetchUsers, fetchTags } from "../clients";

// TODO(Renzo): Create components for displaying builds and users

export default function Home({ builds, users, tags }) {
  return (
    <div>
      <NavigationBar />
      <Hero 
        headerText={'Self-teaching done right.'}
        subText={'Start building your way to learn.'}  
      />
      <Container>
        <Box>
          <Builds builds={builds} tags={tags} />
        </Box>
        
        <Box>
          <Heading as="h2">Users</Heading>
          <List styleType="none">
            {users.map((user) => (
              <ListItem key={user.id} textAlign="left">
                <Link href="/[user]" as={`/${user.name}`}>
                  <a>{user.name}</a>
                </Link>
              </ListItem>
            ))}
          </List>
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
      users: await fetchUsers(),
      tags: await fetchTags()
    },
  };
}
