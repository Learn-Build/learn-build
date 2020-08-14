import React, { useState } from 'react';
import { IconButton } from '@chakra-ui/core';
import PropTypes from 'prop-types';

function TogglableIcon({
  enabledIcon,
  disabledIcon,
  enabledColor,
  disabledColor,
  onClick,
}) {
  const [enabled, setEnabled] = useState(false);

  return (
    <IconButton
      isRound
      size="xs"
      icon={enabled ? enabledIcon : disabledIcon}
      variant="solid"
      backgroundColor={enabled ? enabledColor : disabledColor}
      onClick={() => {
        setEnabled(!enabled);
        onClick(enabled);
      }}
      _hover={{ backgroundColor: 'pink.200' }}
    />
  );
}

TogglableIcon.propTypes = {
  enabledIcon: PropTypes.string,
  disabledIcon: PropTypes.string,
  enabledColor: PropTypes.string,
  disabledColor: PropTypes.string,
  onClick: PropTypes.func,
};

TogglableIcon.defaultProps = {
  enabledIcon: 'star',
  disabledIcon: 'star',
  enabledColor: 'pink.400',
  disabledColor: 'gray.100',
  onClick: () => {},
};

export default TogglableIcon;
