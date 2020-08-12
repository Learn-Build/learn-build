import { Box, Grid, Text, Button } from "@chakra-ui/core";
import CardComponent from "./CardComponent";
import LinkWrapper from "./LinkWrapper";

function TagCard({ tag }) {

  const desktopColumns = '80% 20%';
  const mobileColumns = '80% 20%';
  const responsiveCardColumns = [mobileColumns, mobileColumns, mobileColumns, desktopColumns];

  return (
    <CardComponent>
      <Grid templateColumns={responsiveCardColumns}>
        <LinkWrapper href="/tags/[tag]" as={`/tags/${tag.name}`}>
          <Box>
            <Text 
              as="h1" 
              fontWeight="normal"
            >
              {tag.name}
            </Text>

            <Text 
              as="h2" 
              fontWeight="light" 
              isTruncated
            >
              {tag.description}
            </Text>
          </Box>
        </LinkWrapper>
          <Button rightIcon="small-add">
            Follow
          </Button>
      </Grid>
    </CardComponent>
  );
}

export default TagCard;