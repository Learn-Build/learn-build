import Container from '../components/Container';
import NavigationBar from '../components/NavigationBar';
import { fetchUsers } from './api/client';

export default function User({id, name, email}) {
  return (
    <div>
      <NavigationBar />
      <Container>
        <h1>{`${name}'s Page`}</h1>
        <h2>{email}</h2>
        <p>User ID: {id}</p>
      </Container>
    </div>
  )
}

export async function getStaticPaths() {
  const users = await fetchUsers();
  const paths = users.map(user => `/${user.name}`);
  return { paths, fallback: false }
}

export async function getStaticProps(context) {
  const userName = context.params.user;
  const users = await fetchUsers();
  const userData = users.find(t => t.name === userName);
  return {props: userData};
}
