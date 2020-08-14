import React, { useState } from 'react';
import { Box, Heading, SimpleGrid, Image, Flex, Stack, Text } from '@chakra-ui/core';
import PropTypes from 'prop-types';
import { Transition, CSSTransition } from 'react-transition-group';
import AnimateHeight from 'react-animate-height';

// People section icons
function PplIcon({ imgSrc, imgAlt, name, pos }) {
  return (
    <Stack spacing={1}
      align="center">
      <Image
        src={imgSrc}
        alt={imgAlt}
        htmlWidth={200}
        htmlHeight={200}
        rounded="full"/>
      <Text fontSize="3xl">{name}</Text>
      <Text fontSize="xl">{pos}</Text>
    </Stack>
  );
}

// People section container w grid
function PplSection() {
  // reminds me of h2
  const h2DesktopFont = '4vw';
  const h2MobileFont = '8vw';
  const h2FontSize = [h2MobileFont, h2MobileFont, h2DesktopFont, h2DesktopFont];

  return (
    <>
      <Box textAlign="center">
        <Heading as="h2" fontSize={h2FontSize}>Our Team</Heading>
      </Box>

      <SimpleGrid columns={3}
        spacing={10}
        direction="column"
        alignItems="center"
        justify="center">
          <PplIcon
            imgSrc={"/assets/alpri.jpg"}
            imgAlt={"Alpri Else, Product Manager"}
            name={"Alpri Else"}
            pos={"Product Manager"}
          />
          <PplIcon
            imgSrc={"/assets/renzo.jpg"}
            imgAlt={"Renzo Ledesma, Product Designer and Software Engineer"}
            name={"Renzo Ledesma"}
            pos={"Product Designer and Software Engineer"}
          />
          <PplIcon
            imgSrc={"/assets/neil.jpg"}
            imgAlt={"Neil Patel, Software Engineer"}
            name={"Neil Patel"}
            pos={"Software Engineer"}
          />
          <PplIcon
            imgSrc={"/assets/shayna.jpg"}
            imgAlt={"Shayna Provine, Software Engineer"}
            name={"Shayna Provine"}
            pos={"Software Engineer"}
          />
          <PplIcon
            imgSrc={"/assets/kayla.jpg"}
            imgAlt={"Kayla Raflores, child"}
            name={"Kayla Raflores"}
            pos={"child"}
          />
          <PplIcon
            imgSrc={"/assets/chris.jpg"}
            imgAlt={"Chris Zhu, Software Engineer"}
            name={"Chris Zhu"}
            pos={"Software Engineer"}
          />
      </SimpleGrid>
    </>
  );
}

PplIcon.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  pos: PropTypes.string.isRequired,
};

export default PplSection;
