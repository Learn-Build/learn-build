import React from 'react';
import { PseudoBox, Heading, Text } from '@chakra-ui/core';
import CardComponent from './CardComponent';
import { ResourceProps } from '../constants/propTypes';

function ResourceCard({ resource }) {
  const cardWidth = '300px';
  const fullWidth = '100%';
  const responsiveCardWidth = [fullWidth, fullWidth, fullWidth, cardWidth];

  return (
    <PseudoBox flexBasis={1} minW={responsiveCardWidth}>
      <a href={resource.url} target="_blank" rel="noopener noreferrer">
        <CardComponent
          key={resource.id}
          _hover={{ shadow: 'lg', backgroundColor: 'pink.100' }}
        >
          <Heading as="h4" size="md">
            {resource.title}
          </Heading>
          <Text color="gray.500">{new URL(resource.url).hostname}</Text>
        </CardComponent>
      </a>
    </PseudoBox>
  );
}

ResourceCard.propTypes = {
  resource: ResourceProps.isRequired,
};

export default ResourceCard;
