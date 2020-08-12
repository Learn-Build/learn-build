import Link from "next/link";
import { Box, Grid, Heading, List, ListItem } from "@chakra-ui/core";
import NavigationBar from "../components/NavigationBar";
import Hero from "../components/Hero";
import Builds from '../components/Builds';
import { fetchBuilds, fetchUsers, fetchTags } from "../clients";

// TODO(Renzo): Create components for displaying builds and users

export default function Home({ builds, users, tags }) {

  const desktopWidth = '85%';
  const fullWidth = '95%';
  const responsiveWidth = [fullWidth, fullWidth, desktopWidth, desktopWidth];

  const splitColumns = '60% 40%';
  const oneColumn = '100%';
  const responsiveColumns = [oneColumn, oneColumn, oneColumn, splitColumns];
  
  return (
    <div>
      <NavigationBar />
      <Hero 
        headerText={'Self-teaching done right.'}
        subText={'Start building your way to learn.'}  
      />
      <Grid 
        margin="auto"
        templateColumns={responsiveColumns} 
        width={responsiveWidth}
      >
        <Box>
          <Builds builds={builds} tags={tags} />
        </Box>
        
        <Box>
          <Heading as="h2">Users</Heading>
          <List styleType="none">
            {users.map((user) => (
              <ListItem key={user.id} textAlign="left">
                <Link href="/[user]" as={`/${user.name}`}>
                  <a>{user.name}</a>
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Grid>
    </div>
  );
}

// TODO(Renzo): handle promises once data fetching returns actual data
export async function getStaticProps() {
  return {
    props: {
      builds: await fetchBuilds(),
      users: await fetchUsers(),
      tags: await fetchTags()
    },
  };
}
