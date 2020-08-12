import { Box } from "@chakra-ui/core";
import CardComponent from "./CardComponent";
import Link from "next/link";

function TagCard({ tag }) {
  return (
    <CardComponent>
      <Link href="/tags/[tag]" as={`/tags/${tag.name}`}>
        <a>
          <Box as="h1">
            {tag.name}
          </Box>
        </a>
      </Link>
    </CardComponent>
  );
}

export default TagCard;