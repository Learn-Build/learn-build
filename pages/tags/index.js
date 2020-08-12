import React from 'react';
import { Box, Image } from '@chakra-ui/core';
import Container from '../../components/Container';
import NavigationBar from '../../components/NavigationBar';
import Tags from '../../components/Tags';
import { fetchTags } from '../../clients';

export default function TagsPage({ tags }) {
  return (
    <div>
      <NavigationBar />
      <Container desktopWidth={70}>
        <Box>
          <Tags tags={tags} />
        </Box>
        <Image
          src="/assets/checking_list.jpg"
          alt="Student checking off list"
          mt={35}
        />
      </Container>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      tags: await fetchTags(),
    },
  };
}
