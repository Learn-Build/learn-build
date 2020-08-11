import Link from "next/link";
import { Heading, List, ListItem } from "@chakra-ui/core";
import NavigationBar from "../components/NavigationBar";
import Hero from "../components/Hero";
import Container from "../components/Container";
import { fetchBuilds, fetchUsers } from "../clients";

// TODO(Renzo): Create hero
// TODO(Renzo): Create components for displaying builds and users

export default function Home({ builds, users }) {
  return (
    <div>
      <NavigationBar />
      <Hero />
      <Container>
        <Heading as="h2">Builds</Heading>
        <List styleType="none">
          {builds.map((build) => (
            <ListItem key={build.id} textAlign="center">
              <Link href="/build/[name]" as={`/build/${build.name}`}>
                <a>{build.name}</a>
              </Link>
            </ListItem>
          ))}
        </List>

        <Heading as="h2">Users</Heading>
        <List styleType="none">
          {users.map((user) => (
            <ListItem key={user.id} textAlign="center">
              <Link href="/[user]" as={`/${user.name}`}>
                <a>{user.name}</a>
              </Link>
            </ListItem>
          ))}
        </List>
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
    },
  };
}
