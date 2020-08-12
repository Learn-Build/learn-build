import { useState } from "react";
import { Button } from "@chakra-ui/core";

function TagFilterButton({ tag, handleChange }) {
  const [selected, setSelected] = useState(false);

  return (
    <Button 
      key={tag.id}
      onClick={() => {
        setSelected(!selected);
        handleChange(tag.id);
      }}
      my={1}
      variant={selected ? 'solid' : 'outline'}
      variantColor="pink"
    >
      {tag.name}
    </Button>
  );
}

export default TagFilterButton;