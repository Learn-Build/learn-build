import React from 'react';
import { Box } from '@chakra-ui/core';
import NavigationBar from '../components/NavigationBar';
import Hero from '../components/Hero';
import Container from '../components/Container';
import Builds from '../components/Builds';
import Tags from '../components/Tags';
import { fetchBuilds, fetchTags } from '../clients';

// TODO(Renzo): Add footer and another image somewhere

export default function Home({ builds, tags }) {
  // TODO(Renzo): Limit the amount of builds shown
  // TODO(Renzo): Limit the amount of tags shown - trending tags?
  const tagsToShow = 5;

  return (
    <div>
      <NavigationBar />
      <Hero
        headerText="Self-teaching done right."
        subText="Start building your way to learn."
      />
      <Container>
        <Box>
          <Builds header="Popular Builds" builds={builds} tags={tags} />
        </Box>

        <Box>
          <Tags
            header="Trending Tags"
            tags={tags.slice(0, tagsToShow)}
            showDescription={false}
          />
        </Box>
      </Container>
    </div>
  );
}

// TODO(Renzo): handle promises once data fetching returns actual data
export async function getStaticProps() {
  return {
    props: {
      builds: await fetchBuilds(),
      tags: await fetchTags(),
    },
  };
}
