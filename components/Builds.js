import Link from "next/link";
import { Heading, List, ListItem } from "@chakra-ui/core";

function Builds({ builds }) {
  return (
    <div>
      <Heading as="h2">Builds</Heading>
      <List styleType="none">
        {builds.map((build) => (
          <ListItem key={build.id} textAlign="left">
            <Link href="/build/[name]" as={`/build/${build.name}`}>
              <a>{build.name}</a>
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default Builds;