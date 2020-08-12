import { useState } from 'react';
import { Box, Grid, Text, Button } from "@chakra-ui/core";
import CardComponent from "./CardComponent";
import LinkWrapper from "./LinkWrapper";

function TagCard({ tag }) {
  const [following, setFollowing] = useState(false);

  const desktopColumns = '80% 20%';
  const mobileColumns = '70% 30%';
  const responsiveCardColumns = [mobileColumns, mobileColumns, mobileColumns, desktopColumns];

  const responsiveFontSize = ['xs', 'xs', 'sm', 'md'];

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
              fontSize={responsiveFontSize} 
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
            variantColor="pink"
            size={['xs', 'xs', 'sm', 'md']}
          >
            {following ? 'Following' : 'Follow'}
          </Button>
      </Grid>
    </CardComponent>
  );
}

export default TagCard;