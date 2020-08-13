import React from 'react';
import { Heading } from '@chakra-ui/core';
import Container from '../components/Container';
import NavigationBar from '../components/NavigationBar';

export default function About() {
  return (
    <div>
      <NavigationBar />
      <Container>
        <Heading>About</Heading>
      </Container>
    </div>
  );
}
