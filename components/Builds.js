import Link from "next/link";
import { Heading } from "@chakra-ui/core";
import BuildCard from "./BuildCard";

function Builds({ builds }) {
  return (
    <div>
      <Heading 
        as="h2"
        mb={2}
      >
        Builds
      </Heading>
      {builds.map((build) => (
        <Link href="/build/[name]" as={`/build/${build.name}`}>
          <a>
            <BuildCard key={build.id} build={build} />
          </a>
        </Link>
      ))}
    </div>
  );
}

export default Builds;