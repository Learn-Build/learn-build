import React from 'react';
import { Grid } from '@chakra-ui/core';
import PropTypes from 'prop-types';

function HeaderGrid({ desktopWidth, desktopColumns, children }) {
  const mobileColumns = '100%';

  const responsiveColumns = [
    mobileColumns,
    mobileColumns,
    mobileColumns,
    desktopColumns,
  ];

  return (
    <Grid
      templateColumns={responsiveColumns}
      width={['95%', `${desktopWidth}%`]}
      mx="auto"
      borderWidth="1px"
      borderRadius={10}
      boxShadow="sm"
      px={5}
      py={3}
      my={5}
    >
      {children}
    </Grid>
  );
}

HeaderGrid.propTypes = {
  desktopWidth: PropTypes.number,
  desktopColumns: PropTypes.string,
  children: PropTypes.node.isRequired,
};

HeaderGrid.defaultProps = {
  desktopWidth: 90,
  desktopColumns: '15% 70% 15%',
};

export default HeaderGrid;
