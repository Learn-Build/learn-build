import Link from 'next/link';
import { fetchBuilds, fetchUsers, fetchTags } from './api/client';

// TODO(Renzo): Implement properly styled nav bar

export default function Home({builds, users, tags}) {
  return (
    <div>
      <Link href="/">
        <a>
          <h1>Learn Build</h1>
        </a>
      </Link>

      <h2>Nav Bar</h2>
      <ul>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/search">
            <a>Search</a>
          </Link>
        </li>
      </ul>

      <h2>Builds</h2>
      <ul>
        {builds.map(build => (
          <li key={build.id}>
            <Link href="/build/[name]" as={`/build/${build.name}`}>
              <a>{build.name}</a>
            </Link>
          </li>
        ))}
      </ul>

      <h2>Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link href="/[user]" as={`/${user.name}`}>
              <a>{user.name}</a>
            </Link>
          </li>
        ))}
      </ul>

      <h2>Tags</h2>
      <ul>
        {tags.map(tag => (
          <li key={tag.id}>
            <Link href="/tag/[tag]" as={`/tag/${tag.name}`}>
              <a>{tag.name}</a>
            </Link>
          </li>
        ))}
      </ul>

    </div>
  );
}

// TODO(Renzo): handle promises once data fetching returns actual data
// TODO(Renzo): use getStaticProps or getServerSideProps
// re: https://nextjs.org/docs/api-reference/data-fetching/getInitialProps
Home.getInitialProps = async () => {
  return {
    builds: await fetchBuilds(),
    users: await fetchUsers(),
    tags: await fetchTags()
  };
}
