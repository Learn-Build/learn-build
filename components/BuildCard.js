/* eslint-disable implicit-arrow-linebreak */
import React, { useState } from 'react';
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
import TogglableIcon from './TogglableIcon';
import { BuildProps } from '../constants/propTypes';
import {
  SAVED_TOAST,
  FAVORITED_TOAST,
  UNSAVED_TOAST,
  UNFAVORITED_TOAST,
} from '../constants/toasts';

// TODO(Renzo): Determine initial state through user information

function BuildCard({ build, user, tagNames }) {
  const [favorited, setFavorited] = useState(false);
  const [saved, setSaved] = useState(false);

  const toast = useToast();

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

  function sendToasts(enabled, constructive, destructive) {
    if (enabled) toast(destructive);
    else toast(constructive);
  }

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
            <TogglableIcon
              enabledIcon="star"
              disabledIcon="star"
              onClick={(enabled) => {
                sendToasts(enabled, FAVORITED_TOAST, UNFAVORITED_TOAST);
                setFavorited(!favorited);
              }}
            />
            <Text ml={2} fontSize="xs" alignSelf="center">
              {build.likeCount + (favorited ? 1 : 0)}
            </Text>
          </Stack>

          <Stack isInline>
            <TogglableIcon
              enabledIcon="check"
              disabledIcon="small-add"
              onClick={(enabled) => {
                sendToasts(enabled, SAVED_TOAST, UNSAVED_TOAST);
                setSaved(!enabled);
              }}
            />
            <Text
              fontSize="xs"
              alignSelf="center"
              display={['none', 'block', 'block', 'block']}
              ml={2}
            >
              {saved ? 'Saved' : 'Save'}
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
