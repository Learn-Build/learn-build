import React, { useState } from 'react';
import { Box, Heading, Grid, Image, Flex, Stack, Divider } from '@chakra-ui/core';
import PropTypes from 'prop-types';
// import { Transition, CSSTransition } from 'react-transition-group';
// import AnimateHeight from 'react-animate-height';

// About/mission section icons
function ImgIcon({ imgSrc, imgAlt }) {
  const duration = 300;
  const [isVisible, setIsVisible] = useState(false);

  // for making pretty
  function hoverState(e) {
    e.target.style.background = 'purple';
  }

  function defaultState(e) {
    e.target.style.background = 'grey';
  }

  return (
    <Flex background="grey"
      onMouseOver={hoverState}
      onMouseLeave={defaultState}>
      <Image
        pr={30}
        src={imgSrc}
        alt={imgAlt}
        htmlWidth={270}
        htmlHeight={270}
      />
    </Flex>
  );
}

// About section container w grid
function AbSection({ headerText, subText, imgSrc1, imgAlt1, imgSrc2, imgAlt2, imgSrc3, imgAlt3 }) {
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

  // Constants for responsiveness
  // Padding horizontal/vertical large/small
  const phSm = 8;
  const phLg = 20;
  const pvSm = 6;
  const pvLg = 10;

  return (
    <Grid templateColumns={responsiveGrid}>
      <Stack
        align="center"
        width="fill">
        <ImgIcon
          imgSrc={imgSrc1}
          imgAlt={imgAlt1}
        />
        <ImgIcon
          imgSrc={imgSrc2}
          imgAlt={imgAlt2}
        />
        <ImgIcon
          imgSrc={imgSrc3}
          imgAlt={imgAlt3}
        />
      </Stack>

      <Box
        alignSelf="center"
        textAlign={['left', 'left', 'left', 'left']}>
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

        <Divider/>
        <Heading
          as="h3"
          fontSize={h3FontSize}
          fontWeight="normal"
          pl={[phSm, phSm, phLg, phLg]}
          pr={[phSm, phSm, 0, 0]}
          pt={[pvSm, pvSm, 2, 2]}
          pb={[pvLg, pvLg, 0, 0]}>
        Our mission is to give control back to the user when it comes to deciding how they want to learn. With Learn Build, we hope to foster a community for learning and sharing open and accessible to everyone.
        </Heading>
      </Box>
    </Grid>
  );
}

AbSection.propTypes = {
  headerText: PropTypes.string.isRequired,
  subText: PropTypes.string.isRequired,
  imgSrc1: PropTypes.string.isRequired,
  imgAlt1: PropTypes.string.isRequired,
  imgSrc2: PropTypes.string.isRequired,
  imgAlt2: PropTypes.string.isRequired,
  imgSrc3: PropTypes.string.isRequired,
  imgAlt3: PropTypes.string.isRequired,
};

ImgIcon.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
};

export default AbSection;
