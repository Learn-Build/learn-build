import React from 'react';
import { Heading, Divider, Box, Flex, Image, Text } from '@chakra-ui/core';
import Hero from '../components/Hero';
import AbSection from '../components/AbSection';
import ValSection from '../components/ValSection';
import PplSection from '../components/PplSection';
import NavigationBar from '../components/NavigationBar';

export default function About() {
  const missionSt = "We are believers of a community built on learning. Learn Build exists as a crowdsourcing platform for educational resources. We integrate self-learning with sharing and collaboration; users share and collaborate on 'builds' — educational pathways covering various topics.";
  const valueSt = "Learning, Sharing, Community";

  return (
    <div>
      <NavigationBar />
      <Hero
        headerText="Believers of community learning."
        subText="Students, collaborators, and creators of a new educational space."
        heroImgSrc="/assets/buildmansit.png"
        heroImgAlt="Student making a build"
      />

      {/* Mission section .. was gonna b more */}
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
      <ValSection
        headerText="Our Values"
        subText={valueSt}/>

      {/* Team section */}
      <Divider/>
      <PplSection/>
    </div>
  );
}
