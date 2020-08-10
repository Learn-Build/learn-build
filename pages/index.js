import Link from 'next/link';
import { Heading, List, ListItem } from '@chakra-ui/core';
import { fetchBuilds, fetchUsers, fetchTags } from './api/client';

// TODO(Renzo): Implement properly styled nav bar

export default function Home({builds, users, tags}) {
  return (
    <div>
      <Link href="/">
        <a>
          <Heading as="h1" size="2xl">Learn Build</Heading>
        </a>
      </Link>

      <Heading as="h2">Nav Bar</Heading>
      <List styleType="disc">
        <ListItem>
          <Link href="/about">
            <a>About</a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/search">
            <a>Search</a>
          </Link>
        </ListItem>
      </List>

      <Heading as="h2">Builds</Heading>
      <List styleType="disc">
        {builds.map(build => (
          <ListItem key={build.id}>
            <Link href="/build/[name]" as={`/build/${build.name}`}>
              <a>{build.name}</a>
            </Link>
          </ListItem>
        ))}
      </List>

      <Heading as="h2">Users</Heading>
      <List styleType="disc">
        {users.map(user => (
          <ListItem key={user.id}>
            <Link href="/[user]" as={`/${user.name}`}>
              <a>{user.name}</a>
            </Link>
          </ListItem>
        ))}
      </List>

      <Heading as="h2">Tags</Heading>
      <List>
        {tags.map(tag => (
          <ListItem key={tag.id}>
            <Link href="/tag/[tag]" as={`/tag/${tag.name}`}>
              <a>{tag.name}</a>
            </Link>
          </ListItem>
        ))}
      </List>

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
