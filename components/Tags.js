import React from 'react';
import { Box } from '@chakra-ui/core';
import PropTypes from 'prop-types';
import ResponsiveHeading from './ResponsiveHeading';
import TagCard from './TagCard';
import { TagListProps } from '../constants/propTypes';

function Tags({ tags, header = 'Tags', showDescription = true }) {
  return (
    <Box>
      <ResponsiveHeading>{header}</ResponsiveHeading>
      {tags.map((tag) => (
        <TagCard tag={tag} key={tag.id} showDescription={showDescription} />
      ))}
    </Box>
  );
}

Tags.propTypes = {
  tags: TagListProps.isRequired,
  header: PropTypes.string,
  showDescription: PropTypes.bool,
};

Tags.defaultProps = {
  header: 'Tags',
  showDescription: true,
};

export default Tags;
