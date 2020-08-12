import { Heading, Text } from '@chakra-ui/core';
import Container from '../../components/Container';
import NavigationBar from '../../components/NavigationBar';
import { fetchBuilds } from '../../clients';

export default function Build({ id, name, description }) {
  return (
    <div>
      <NavigationBar />
      <Container>
        <Heading>{name}</Heading>
        <Text>{`Build ID: ${id}`}</Text>
        <Text>{description}</Text>
      </Container>
    </div>
  );
}

export async function getStaticPaths() {
  const builds = await fetchBuilds();
  const paths = builds.map((build) => `/build/${build.name}`);
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const buildName = context.params.name;
  const builds = await fetchBuilds();
  const buildData = builds.find((t) => t.name === buildName);
  return { props: buildData };
}
