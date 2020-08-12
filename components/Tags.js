import { Box } from "@chakra-ui/core";
import ResponsiveHeading from "./ResponsiveHeading";
import TagCard from "./TagCard";

function Tags({ tags, showDescription=true }) {
  return (
    <Box>
      <ResponsiveHeading>Tags</ResponsiveHeading>
      {tags.map((tag) => (
        <TagCard 
          tag={tag} 
          key={tag.id}
          showDescription={showDescription}
        />
      ))}
    </Box>
  );
}

export default Tags;