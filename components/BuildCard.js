import React from 'react';
import {
  Box,
  Grid,
  Image,
  Stack,
  IconButton,
  Text,
  useToast,
} from '@chakra-ui/core';
import PropTypes from 'prop-types';
import LinkWrapper from './LinkWrapper';
import CardComponent from './CardComponent';
import TagBadges from './TagBadges';
import { BuildProps } from '../constants/propTypes';

// TODO(Renzo): Add state to card for interacting with buttons

function BuildCard({ build, user, tagNames }) {
  const toast = useToast();
  const savedToastOptions = {
    title: 'Build saved!',
    description: 'You can find it in your saved builds.',
    status: 'success',
    duration: 3000,
    isClosable: true,
  };

  const favoritedToastOptions = {
    title: 'Build favorited!',
    description: 'You can find it in your favorites',
    status: 'success',
    duration: 3000,
    isClosable: true,
  };

  const linkHref = '/build/[name]';
  const linkAs = `/build/${build.name}`;

  const desktopColumns = '15% 75% 10%';
  const mobileColumns = '13% 72% 15%';
  const responsiveCardColumns = [
    mobileColumns,
    mobileColumns,
    mobileColumns,
    desktopColumns,
  ];

  const headerFontSize = ['md', 'md', 'lg', 'xl'];
  const bodyFontSize = ['xs', 'xs', 'sm', 'sm'];

  return (
    <CardComponent>
      <Grid templateColumns={responsiveCardColumns}>
        <LinkWrapper href={linkHref} as={linkAs}>
          {/* FIXME: Needs to be vertically centered but not sure how? */}
          <Image
            src={build.imageUrl}
            fallbackSrc="/assets/learn_build_logo.svg"
            alignSelf="center"
            my="20%"
            pr={3}
          />
        </LinkWrapper>

        {/* TODO(Renzo): Make tag badges link to tag page */}
        <LinkWrapper href={linkHref} as={linkAs}>
          <Box>
            <TagBadges tagNames={tagNames} />

            <Box as="h3" fontSize={headerFontSize} fontWeight="bold">
              {build.name}
            </Box>

            {/* TODO(Renzo): Make username link to user's page */}
            <Box as="h2" fontSize={bodyFontSize} color="gray.500">
              {user.name}
            </Box>

            <Box as="p" fontSize={bodyFontSize}>
              {build.description}
            </Box>
          </Box>
        </LinkWrapper>

        <Stack>
          <Stack isInline>
            <IconButton
              isRound
              size="xs"
              icon="star"
              onClick={() => toast(favoritedToastOptions)}
            />
            <Text fontSize="xs" alignSelf="center">
              {build.likeCount}
            </Text>
          </Stack>

          <Stack isInline>
            <IconButton
              isRound
              size="xs"
              icon="add"
              onClick={() => toast(savedToastOptions)}
            />
            <Text
              fontSize="xs"
              alignSelf="center"
              display={['none', 'block', 'block', 'block']}
            >
              Save
            </Text>
          </Stack>
        </Stack>
      </Grid>
    </CardComponent>
  );
}

BuildCard.propTypes = {
  build: BuildProps,
  user: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  tagNames: PropTypes.arrayOf(PropTypes.string),
};

BuildCard.defaultProps = {
  build: {},
  tagNames: [],
};

export default BuildCard;
