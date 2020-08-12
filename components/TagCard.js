import { useState } from 'react';
import { Box, Grid, Text, Button } from "@chakra-ui/core";
import CardComponent from "./CardComponent";
import LinkWrapper from "./LinkWrapper";

function TagCard({ tag }) {
  const [following, setFollowing] = useState(false);

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
              fontWeight="bold"
            >
              {tag.name}
            </Text>

            <Text 
              as="h2" 
              fontWeight="normal" 
              isTruncated
            >
              {tag.description}
            </Text>
          </Box>
        </LinkWrapper>
          <Button
            rightIcon={following ? 'check' : 'small-add'}
            onClick={() => setFollowing(!following)}
            variant={following ? 'solid' : 'outline'}
          >
            {following ? 'Following' : 'Follow'}
          </Button>
      </Grid>
    </CardComponent>
  );
}

export default TagCard;