import { Grid } from '@chakra-ui/core';

function Container({ desktopWidth=85, mobileWidth=95, children }) {

  const desktop = `${desktopWidth}%`;
  const mobile = `${mobileWidth}%`;
  const responsiveWidth = [mobile, mobile, desktop, desktop];

  const splitColumns = '60% 40%';
  const oneColumn = '100%';
  const responsiveColumns = [oneColumn, oneColumn, oneColumn, splitColumns];

  return (
    <Grid 
      margin="auto"
      templateColumns={responsiveColumns} 
      width={responsiveWidth}
    >
      {children}
    </Grid>
  );
}

export default Container;
