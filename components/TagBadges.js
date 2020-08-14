import React from 'react';
import { Badge, Flex } from '@chakra-ui/core';
import PropTypes from 'prop-types';

function TagBadges({ tagNames, fontSize, flexDir }) {
  return (
    <Flex flexDir={flexDir} wrap="wrap">
      {tagNames.map((tag) => (
        <Badge
          key={tag}
          mr={1}
          mt={1}
          px={2}
          fontSize={fontSize}
          backgroundColor="pink.100"
        >
          {tag}
        </Badge>
      ))}
    </Flex>
  );
}

TagBadges.propTypes = {
  tagNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  fontSize: PropTypes.number,
  flexDir: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
};

TagBadges.defaultProps = {
  fontSize: 12,
  flexDir: 'row',
};

export default TagBadges;
