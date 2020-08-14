import React from 'react';
import { Heading, Divider } from '@chakra-ui/core';
import Hero from '../components/Hero';
import AbSection from '../components/AbSection';
import Container from '../components/Container';
import NavigationBar from '../components/NavigationBar';

export default function About() {
  return (
    <div>
      <NavigationBar />
      <Hero
        headerText="Believers of community learning."
        subText="Students, collaborators, and creators of a new educational space."
        heroImgSrc="/assets/buildmansit.png"
        heroImgAlt="Student making a build"
      />
      <Divider/>
      <Container>
        <AbSection headerText="lol" subText="lols">
        </AbSection>
      </Container>
    </div>
  );
}
