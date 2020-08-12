import { Box } from '@chakra-ui/core';
import ResponsiveHeading from './ResponsiveHeading';
import TagCard from './TagCard';

function Tags({ tags, header = 'Tags', showDescription = true }) {
  return (
    <Box>
      <ResponsiveHeading>{header}</ResponsiveHeading>
      {tags.map((tag) => (
        <TagCard tag={tag} key={tag.id} showDescription={showDescription} />
      ))}
    </Box>
  );
}

export default Tags;
