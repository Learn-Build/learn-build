import Link from 'next/link';
import { Heading, List, ListItem } from '@chakra-ui/core';
import NavigationBar from '../components/NavigationBar';
import Container from '../components/Container';
import { fetchBuilds, fetchUsers, fetchTags } from './api/client';

// TODO(Renzo): Implement navigation in navbar

export default function Home({builds, users, tags}) {
  return (
    <div>
      <NavigationBar />
      <Container>
        <Heading as="h2">Builds</Heading>
        <List styleType="none">
          {builds.map(build => (
            <ListItem key={build.id} textAlign="center">
              <Link href="/build/[name]" as={`/build/${build.name}`}>
                <a>{build.name}</a>
              </Link>
            </ListItem>
          ))}
        </List>

        <Heading as="h2">Users</Heading>
        <List styleType="none">
          {users.map(user => (
            <ListItem key={user.id} textAlign="center">
              <Link href="/[user]" as={`/${user.name}`}>
                <a>{user.name}</a>
              </Link>
            </ListItem>
          ))}
        </List>

        <Heading as="h2">Tags</Heading>
        <List styleType="none">
          {tags.map(tag => (
            <ListItem key={tag.id} textAlign="center">
              <Link href="/tag/[tag]" as={`/tag/${tag.name}`}>
                <a>{tag.name}</a>
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
      tags: await fetchTags()
    }
  };
}
