import { useState } from "react";
import { Button } from "@chakra-ui/core";

function TogglableButton({
  enabledText="Following",
  disabledText="Follow",
  enabledVariant="solid",
  disabledVariant="outline",
  initialState=false,
  size=['xs', 'xs', 'sm', 'md'],
  fontSize=['xs', 'sm'],
  variantColor="pink",
  onClick = () => {},
  props
}) {

  const [enabled, setEnabled] = useState(initialState);

  return (
    <Button
      rightIcon={enabled ? 'check' : 'small-add'}
      onClick={() => {
        setEnabled(!enabled);
        onClick();
      }}
      variant={enabled ? enabledVariant : disabledVariant}
      variantColor={variantColor}
      size={size}
      fontSize={fontSize}
      {...props}
    >
      {enabled ? enabledText : disabledText}
    </Button>
  );
}

export default TogglableButton;