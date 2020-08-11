import { Box } from "@chakra-ui/core";

function BuildCard({ build }) {
  return (
    <Box borderWidth="1px" rounded="lg" key={build.id}>
      <Box as="h3" fontWeight="bold">
        {build.name}
      </Box>
    </Box>
  );
}

export default BuildCard;