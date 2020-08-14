import React, { useState } from 'react';
// import { Carousel, CarouselItem } from 'react-bootstrap';
//import 'react-bootstrap';
//import Carousel from 'react-bootstrap/lib/Carousel';
import { Box, Heading, Grid, Image, Stack, Text, Divider } from '@chakra-ui/core';
import PropTypes from 'prop-types';
// import { Transition, CSSTransition } from 'react-transition-group';
// import AnimateHeight from 'react-animate-height';
// import { render } from 'react-dom';

// People section container w grid
function ValSection({ headerText, subText }) {
  const horizontalGrid = '40% 60%';
  const stackGrid = '100%';
  const responsiveGrid = [stackGrid, horizontalGrid, horizontalGrid, horizontalGrid];

  // reminds me of h2/h3 rather than h1/h2 in Hero.js
  const h2DesktopFont = '4vw';
  const h2MobileFont = '8vw';
  const h2FontSize = [h2MobileFont, h2MobileFont, h2DesktopFont, h2DesktopFont];

  const h3DesktopFont = '2vw';
  const h3MobileFont = '4vw';
  const h3FontSize = [h3MobileFont, h3MobileFont, h3DesktopFont, h3DesktopFont];

  const h4DesktopFont = '2xl';
  const h4MobileFont = 'xl';
  const h4FontSize = [h4MobileFont, h4MobileFont, h4DesktopFont, h4DesktopFont];

  // Constants for responsiveness
  // Padding horizontal/vertical large/small
  const phSm = 8;
  const phLg = 20;
  const pvSm = 6;
  const pvLg = 10;

  return (
    <Grid templateColumns={responsiveGrid}>
      <Box
        alignSelf="center"
        textAlign={['right', 'right', 'center', 'center']}>
        <Heading
          as="h2"
          fontSize={h2FontSize}
          pl={[phSm, phSm, phLg, phLg]}
          pr={[phSm, phSm, 0, 0]}
          pt={[pvSm, pvSm, 0, 0]}
          pb={[0, 0, 0, 0]}>
          {headerText}
        </Heading>
        <Heading
          as="h3"
          fontSize={h3FontSize}
          fontWeight="normal"
          pl={[phSm, phSm, phLg, phLg]}
          pr={[phSm, phSm, 0, 0]}
          pt={[pvSm, pvSm, 2, 2]}
          pb={[pvLg, pvLg, 0, 0]}>
          {subText}
        </Heading>

        {/* lmao . idc ab this section no more i'm just tired */}
        <Divider/>
        <Heading
          as="h3"
          fontSize={h3FontSize}
          pl={[phSm, phSm, phLg, phLg]}
          pr={[phSm, phSm, 0, 0]}
          pt={[pvSm, pvSm, 2, 2]}
          pb={[pvLg, pvLg, 0, 0]}>
          Learning. How do we learn new things?
        </Heading>
        <Heading
          as="h4"
          fontSize={h4FontSize}
          fontWeight="normal"
          pl={[phSm, phSm, phLg, phLg]}
          pr={[phSm, phSm, 0, 0]}
          pt={[pvSm, pvSm, 2, 2]}
          pb={[pvLg, pvLg, 0, 0]}>
          Learning comes in all shapes and sizes. With all of the pages and pages provided by a single Google search, can we narrow it down to the most effective tools out there?
        </Heading>

        <Divider/>
        <Heading
          as="h3"
          fontSize={h3FontSize}
          pl={[phSm, phSm, phLg, phLg]}
          pr={[phSm, phSm, 0, 0]}
          pt={[pvSm, pvSm, 2, 2]}
          pb={[pvLg, pvLg, 0, 0]}>
          Sharing. How do we learn from one another?
        </Heading>
        <Heading
          as="h4"
          fontSize={h4FontSize}
          fontWeight="normal"
          pl={[phSm, phSm, phLg, phLg]}
          pr={[phSm, phSm, 0, 0]}
          pt={[pvSm, pvSm, 2, 2]}
          pb={[pvLg, pvLg, 0, 0]}>
          Sharing is caring. Especially when it comes to what we know. We care about discovering new pathways to learn, studying with the latest tools, and expanding our horizons.
        </Heading>

        <Divider/>
        <Heading
          as="h3"
          fontSize={h3FontSize}
          pl={[phSm, phSm, phLg, phLg]}
          pr={[phSm, phSm, 0, 0]}
          pt={[pvSm, pvSm, 2, 2]}
          pb={[pvLg, pvLg, 0, 0]}>
          Community. How do we give back?
        </Heading>
        <Heading
          as="h4"
          fontSize={h4FontSize}
          fontWeight="normal"
          pl={[phSm, phSm, phLg, phLg]}
          pr={[phSm, phSm, 0, 0]}
          pt={[pvSm, pvSm, 2, 2]}
          pb={[pvLg, pvLg, 0, 0]}>
          Community and collaboration work hand-in-hand. Learn Build connects personal interests and academic interests. By simplifying ways to learn, we hope to further inspire the student within all of us.
        </Heading>
      </Box>

      {/* real dum image stack smh */}
      <Stack
        align="center"
        width="fill">
          <Image
            src={"assets/learning.png"}
            alt={"Learning staircase"}
            htmlWidth={450}
            htmlHeight={300}
          />
          <Image
            src={"/assets/sharing.png"}
            alt={"Sharing space"}
            htmlWidth={450}
            htmlHeight={300}
          />
          <Image
            src={"/assets/community.png"}
            alt={"Community with Learn Build"}
            htmlWidth={450}
            htmlHeight={300}
          />
      </Stack>
    </Grid>
  );
}

// <Carousel>
//   <Carousel.Item>
//     <Image
//       src={"assets/learning.png"}
//       alt={"Learning staircase"}
//     />
//     <Carousel.Caption>
//       <h3>First slide label</h3>
//       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <Image
//       src={"/assets/sharing.png"}
//       alt={"Sharing space"}
//     />
//
//     <Carousel.Caption>
//       <h3>Second slide label</h3>
//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <Image
//       src={"/assets/community.png"}
//       alt={"Community with Learn Build"}
//     />
//
//     <Carousel.Caption>
//       <h3>Third slide label</h3>
//       <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
// </Carousel>

// imgSrc1={"/assets/learning.png"}
// imgAlt1={"Learning staircase"}
// imgSrc2={"/assets/sharing.png"}
// imgAlt2={"Sharing space"}
// imgSrc3={"/assets/community.png"}
// imgAlt3={"Community with Learn Build"}>

ValSection.propTypes = {
  headerText: PropTypes.string.isRequired,
  subText: PropTypes.string.isRequired,
};
export default ValSection;
