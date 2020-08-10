import Link from 'next/link';
import { USERS } from './api/constants/users';

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
    </div>
  );
}
