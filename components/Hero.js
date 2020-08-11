import { Heading, Grid, Image } from "@chakra-ui/core";

function Hero() {

  const horizontalGrid = '45% 55%';
  const stackGrid = '100%'
  const responsiveGrid = [stackGrid, stackGrid, horizontalGrid, horizontalGrid];

  const largeScreenFont = '6vw';
  const mobileScreenFont = '10vw';
  const responsiveFontSize = [mobileScreenFont, mobileScreenFont, largeScreenFont, largeScreenFont];

  // Constants for responsiveness
  // Padding horizontal/vertical large/small
  const phSm = 8;
  const phLg = 20;
  const pvSm = 6;
  const pvLg = 10;

  return (
    <Grid templateColumns={responsiveGrid}>
      <Heading 
        as="h1" 
        fontSize={responsiveFontSize}
        alignSelf="center"
        pl={[phSm, phSm, phLg, phLg]}
        pr={[phSm, phSm, 0, 0]}
        pt={[pvSm, pvSm, 0, 0]}
        pb={[pvLg, pvLg, 0, 0]}
        textAlign={['center', 'center', 'right', 'right']}
      >
        Self-teaching done right.
      </Heading>
      <Image pr={30} src="/assets/student_studying_small.jpg" />
    </Grid>
  );
}

export default Hero;