import React from 'react';
import { Grid } from '@chakra-ui/core';
import PropTypes from 'prop-types';

function Container({
  desktopWidth = 85,
  mobileWidth = 95,
  leftColumn = 60,
  rightColumn = 40,
  children,
}) {
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
      mb={10}
    >
      {children}
    </Grid>
  );
}

Container.propTypes = {
  desktopWidth: PropTypes.number,
  mobileWidth: PropTypes.number,
  leftColumn: PropTypes.number,
  rightColumn: PropTypes.number,
  children: PropTypes.node.isRequired,
};

Container.defaultProps = {
  desktopWidth: 85,
  mobileWidth: 95,
  leftColumn: 60,
  rightColumn: 40,
};

export default Container;
