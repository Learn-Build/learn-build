import React from 'react';
import { Box, Heading, Grid, Image } from '@chakra-ui/core';
import PropTypes from 'prop-types';

function Hero({ headerText, subText, heroImgSrc, heroImgAlt }) {
  const horizontalGrid = '45% 55%';
  const stackGrid = '100%';
  const responsiveGrid = [stackGrid, stackGrid, horizontalGrid, horizontalGrid];

  const h1DesktopFont = '6vw';
  const h1MobileFont = '10vw';
  const h1FontSize = [h1MobileFont, h1MobileFont, h1DesktopFont, h1DesktopFont];

  const h2DesktopFont = '2vw';
  const h2MobileFont = '4vw';
  const h2FontSize = [h2MobileFont, h2MobileFont, h2DesktopFont, h2DesktopFont];

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
        textAlign={['center', 'center', 'right', 'right']}
      >
        <Heading
          as="h1"
          fontSize={h1FontSize}
          pl={[phSm, phSm, phLg, phLg]}
          pr={[phSm, phSm, 0, 0]}
          pt={[pvSm, pvSm, 0, 0]}
          pb={[0, 0, 0, 0]}
        >
          {headerText}
        </Heading>
        <Heading
          as="h2"
          fontSize={h2FontSize}
          fontWeight="normal"
          pl={[phSm, phSm, phLg, phLg]}
          pr={[phSm, phSm, 0, 0]}
          pt={[pvSm, pvSm, 2, 2]}
          pb={[pvLg, pvLg, 0, 0]}
        >
          {subText}
        </Heading>
      </Box>

      <Image
        pr={30}
        src={heroImgSrc}
        alt={heroImgAlt}
        htmlWidth={4735}
        htmlHeight={3757}
      />
    </Grid>
  );
}

Hero.propTypes = {
  headerText: PropTypes.string.isRequired,
  subText: PropTypes.string.isRequired,
  heroImgSrc: PropTypes.string.isRequired,
  heroImgAlt: PropTypes.string.isRequired,
};

export default Hero;
