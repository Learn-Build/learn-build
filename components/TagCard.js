import React, { useState } from 'react';
import { Box, Grid, Text } from '@chakra-ui/core';
import PropTypes from 'prop-types';
import CardComponent from './CardComponent';
import LinkWrapper from './LinkWrapper';
import TogglableButton from './TogglableButton';
import { TagProps } from '../constants/propTypes';

// TODO(Renzo): Add logic for checking if user already follows tag

function TagCard({ tag, showDescription = true }) {
  const [following, setFollowing] = useState(false);

  const desktopColumns = '80% 20%';
  const mobileColumns = '70% 30%';
  const responsiveCardColumns = [
    mobileColumns,
    mobileColumns,
    mobileColumns,
    desktopColumns,
  ];

  const responsiveFontSize = ['xs', 'xs', 'sm', 'md'];

  return (
    <CardComponent>
      <Grid templateColumns={responsiveCardColumns}>
        <LinkWrapper href="/tags/[tag]" as={`/tags/${tag.name}`}>
          <Box>
            <Text as="h1" fontWeight="bold">
              {tag.name}
            </Text>

            {showDescription && (
              <Text
                as="h2"
                fontWeight="normal"
                fontSize={responsiveFontSize}
                isTruncated
              >
                {tag.description}
              </Text>
            )}
          </Box>
        </LinkWrapper>

        <TogglableButton
          enabledText="Following"
          disabledText="Follow"
          onClick={() => setFollowing(!following)}
          initialState={following}
        />
      </Grid>
    </CardComponent>
  );
}

TagCard.propTypes = {
  tag: TagProps.isRequired,
  showDescription: PropTypes.bool,
};

TagCard.defaultProps = {
  showDescription: true,
};

export default TagCard;
