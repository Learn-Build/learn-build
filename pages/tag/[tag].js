import { Heading, Text } from '@chakra-ui/core';
import Container from '../../components/Container';
import NavigationBar from '../../components/NavigationBar';
import { fetchTags } from '../api/client';

export default function Tag({id, name, description}) {
  return (
    <div>
      <NavigationBar />
      <Container>
        <Heading>{name}</Heading>
        <Text>{`Tag ID: ${id}`}</Text>
        <Text>{description}</Text>
      </Container>
    </div>
  );
}

export async function getStaticPaths() {
  const tags = await fetchTags();
  const paths = tags.map(tag => `/tag/${tag.name}`);
  return { paths, fallback: false }
}

export async function getStaticProps(context) {
  const tagName = context.params.tag;
  const tags = await fetchTags();
  const tagData = tags.find(t => t.name === tagName);
  return {props: tagData};
}
