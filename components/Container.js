import { Grid } from '@chakra-ui/core';

function Container({ desktopWidth=85, mobileWidth=95, leftColumn=60, rightColumn=40, children }) {

  const desktop = `${desktopWidth}%`;
  const mobile = `${mobileWidth}%`;
  const responsiveWidth = [mobile, mobile, desktop, desktop];

  const splitColumns = `${leftColumn}% ${rightColumn}%`;
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
