/* eslint-disable react/jsx-props-no-spreading */
// https://chakra-ui.com/modal#adding-transition
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { ResourceProps } from '../constants/propTypes';

const {
  useDisclosure,
  IconButton,
  SlideIn,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
} = require('@chakra-ui/core');

function ResourceDetails({ resource, copyToClipboard }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const buttonRef = useRef();
  const { title, url, description } = resource;

  return (
    <>
      <IconButton
        icon="info-outline"
        ref={buttonRef}
        onClick={onOpen}
        size="sm"
        variant="ghost"
      />

      <SlideIn in={isOpen}>
        {(styles) => (
          <Modal
            preserveScrollBarGap
            finalFocusRef={buttonRef}
            onClose={onClose}
            isOpen
          >
            <ModalOverlay opacity={styles.opacity} />
            <ModalContent borderRadius={5} pb={5} {...styles}>
              <ModalHeader mr={2}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {title}
                  <Text fontSize={13} color="gray.400">
                    {new URL(resource.url).hostname}
                  </Text>
                </a>
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text>{description}</Text>
                <IconButton
                  icon="copy"
                  size="sm"
                  mt={3}
                  onClick={() => copyToClipboard(resource.url)}
                />
              </ModalBody>
            </ModalContent>
          </Modal>
        )}
      </SlideIn>
    </>
  );
}

ResourceDetails.propTypes = {
  resource: ResourceProps.isRequired,
  copyToClipboard: PropTypes.func.isRequired,
};

export default ResourceDetails;
