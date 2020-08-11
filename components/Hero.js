import { Heading, Grid, Image } from "@chakra-ui/core";

function Hero() {
  return (
    <Grid templateColumns={'45% 55%'}>
      <Heading 
        as="h1" 
        fontSize="6vw"
        alignSelf="center"
        pl={20}
        textAlign="right"
      >
        Self-teaching done right.
      </Heading>
      <Image pr={30} src="/assets/student_studying_small.jpg" />
    </Grid>
  );
}

export default Hero;