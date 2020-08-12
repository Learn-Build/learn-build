import { Box } from "@chakra-ui/core";
import CardComponent from "./CardComponent";
import LinkWrapper from "./LinkWrapper";

function TagCard({ tag }) {
  return (
    <LinkWrapper href="/tags/[tag]" as={`/tags/${tag.name}`}>
      <CardComponent>
        <Box as="h1" fontWeight="normal">
          {tag.name}
        </Box>
        <Box as="h2" fontWeight="light">
          {tag.description}
        </Box>
      </CardComponent>
    </LinkWrapper>
  );
}

export default TagCard;