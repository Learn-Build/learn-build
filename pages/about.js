import React from 'react';
import { Heading, Divider, Box, Flex, Image, Text } from '@chakra-ui/core';
import Hero from '../components/Hero';
import AbSection from '../components/AbSection';
import NavigationBar from '../components/NavigationBar';

function PplIcon({ imgSrc, imgAlt, name, pos }) {
  return (
    <Flex>
      <Image
        pr={30}
        src={imgSrc}
        alt={imgAlt}
        htmlWidth={300}
        htmlHeight={300}
        rounded="full"/>
      <Text fontSize="3xl">{name}</Text>
      <Text fontSize="2xl">{pos}</Text>
    </Flex>
  );
}

export default function About() {
  const missionSt = "We are believers of a community built on learning. Learn Build exists as a greater space for sharing educational resources. We integrate self-learning with sharing and collaboration; users share and collaborate on 'builds' — educational pathways covering various topics.\n\nWe are the platform for providing others with resources to use so that they can share and learn from one another. Connecting learners with valuable online tools, courses, and other means to self-education is our goal.";
  const valueSt = "Learning, Sharing, Community";

  // reminds me of h2/h3 rather than h1/h2 in Hero.js
  const h2DesktopFont = '4vw';
  const h2MobileFont = '8vw';
  const h2FontSize = [h2MobileFont, h2MobileFont, h2DesktopFont, h2DesktopFont];

  const h3DesktopFont = '2vw';
  const h3MobileFont = '4vw';
  const h3FontSize = [h3MobileFont, h3MobileFont, h3DesktopFont, h3DesktopFont];

  // Constants for responsiveness
  // Padding horizontal/vertical large/small
  const phSm = 8;
  const phLg = 20;
  const pvSm = 6;
  const pvLg = 10;

  return (
    <div>
      <NavigationBar />
      <Hero
        headerText="Believers of community learning."
        subText="Students, collaborators, and creators of a new educational space."
        heroImgSrc="/assets/buildmansit.png"
        heroImgAlt="Student making a build"
      />

      {/* Mission section */}
      <Divider/>
      <AbSection
        headerText="Our Mission"
        subText={missionSt}
        imgSrc1={"/assets/mission1.png"}
        imgAlt1={"Searching for interesting learning resources"}
        imgSrc2={"/assets/mission2.png"}
        imgAlt2={"Favoriting the best resources and builds"}
        imgSrc3={"/assets/mission3.png"}
        imgAlt3={"Creating learning builds for others to use"}>
      </AbSection>

      {/* Values section*/}
      <Divider/>
      <AbSection
        headerText="Our Values"
        subText={valueSt}
        imgSrc1={"/assets/learning.png"}
        imgAlt1={"Searching for interesting learning resources"}
        imgSrc2={"/assets/sharing.png"}
        imgAlt2={"Favoriting the best resources and builds"}
        imgSrc3={"/assets/community.png"}
        imgAlt3={"Creating learning builds for others to use"}>
      </AbSection>

      {/* Team section */}
      {/* ..make diff class */}
      <Divider/>
      <Box
        alignSelf="center"
        textAlign={['center', 'center', 'center', 'center']}>
        <Heading
          as="h2"
          fontSize={h2FontSize}
          pl={[phSm, phSm, phLg, phLg]}
          pr={[phSm, phSm, 0, 0]}
          pt={[pvSm, pvSm, 0, 0]}
          pb={[0, 0, 0, 0]}>Our Team</Heading>
        <Heading
          as="h3"
          fontSize={h3FontSize}
          fontWeight="normal"
          pl={[phSm, phSm, phLg, phLg]}
          pr={[phSm, phSm, 0, 0]}
          pt={[pvSm, pvSm, 2, 2]}
          pb={[pvLg, pvLg, 0, 0]}>bebop</Heading>
        <PplIcon
          imgSrc={"/assets/3.png"}
          imgAlt={"guy"}
          name={"alpri else"}
          pos={"pm"}
        />
      </Box>
    </div>
  );
}
