import { Heading } from '@chakra-ui/core';
import Container from '../components/Container';
import NavigationBar from '../components/NavigationBar';

export default function Search() {
  return (
    <div>
      <NavigationBar />
      <Container>
        <Heading>Search</Heading>
      </Container>
    </div>
  );
}
