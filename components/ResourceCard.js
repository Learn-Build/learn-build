/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
  PseudoBox,
  Heading,
  Text,
  Stack,
  Flex,
  IconButton,
  useToast,
} from '@chakra-ui/core';
import CardComponent from './CardComponent';
import ResourceDetails from './ResourceDetails';
import { ResourceProps } from '../constants/propTypes';

function ResourceCard({ resource }) {
  const toast = useToast();
  const copiedToastOptions = {
    title: 'Resource URL copied to clipboard.',
    status: 'info',
    duration: 2000,
    isClosable: true,
  };

  const cardWidth = '300px';
  const fullWidth = '100%';
  const responsiveCardWidth = [fullWidth, fullWidth, fullWidth, cardWidth];

  async function copyToClipboard(url) {
    await navigator.clipboard.writeText(url);
    toast(copiedToastOptions);
  }

  return (
    <PseudoBox flexBasis={1} minW={responsiveCardWidth}>
      <CardComponent
        key={resource.id}
        _hover={{ shadow: 'lg', backgroundColor: 'pink.100' }}
      >
        <a href={resource.url} target="_blank" rel="noopener noreferrer">
          <Heading as="h4" size="md">
            {resource.title}
          </Heading>
          <Text color="gray.500">{new URL(resource.url).hostname}</Text>
        </a>
        <Flex justifyContent="space-between" mt={2}>
          <Stack isInline>
            <IconButton
              icon="copy"
              size="sm"
              variant="ghost"
              onClick={() => copyToClipboard(resource.url)}
            />
            <ResourceDetails
              resource={resource}
              copyToClipboard={copyToClipboard}
            />
          </Stack>
          <Stack isInline isReversed>
            <a href={resource.url} target="_blank" rel="noopener noreferrer">
              <IconButton icon="external-link" size="sm" variant="ghost" />
            </a>
          </Stack>
        </Flex>
      </CardComponent>
    </PseudoBox>
  );
}

ResourceCard.propTypes = {
  resource: ResourceProps.isRequired,
};

export default ResourceCard;
