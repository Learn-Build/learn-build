import Link from 'next/link';
import { USERS } from './api/constants/users';
import { TAGS } from './api/constants/tags';
import { BUILDS } from './api/constants/builds';

// TODO(Renzo): Implement properly styled nav bar
// TODO(Renzo): Implement data fetching for tags, posts, users, etc.

export default function Home() {
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
        {BUILDS.map(build => (
          <li>
            <Link href="/build/[name]" as={`/build/${build.name}`}>
              <a>{build.name}</a>
            </Link>
          </li>
        ))}
      </ul>

      <h2>Users</h2>
      <ul>
        {USERS.map(user => (
          <li>
            <Link href="/[user]" as={`/${user.name}`}>
              <a>{user.name}</a>
            </Link>
          </li>
        ))}
      </ul>

      <h2>Tags</h2>
      <ul>
        {TAGS.map(tag => (
          <li>
            <Link href="/tag/[tag]" as={`/tag/${tag.name}`}>
              <a>{tag.name}</a>
            </Link>
          </li>
        ))}
      </ul>

    </div>
  );
}
