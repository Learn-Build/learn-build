import Link from "next/link";
import { Heading } from "@chakra-ui/core";
import BuildCard from "./BuildCard";

function Builds({ builds, tags }) {

  // FIXME(Renzo): there must be a better way to do this...
  function getTagNames(build, tags) {
    const { tagIds } = build;
    const tagNames = tagIds.map((id) => {
      const foundTag = tags.find((tag) => tag.id === id);
      return foundTag.name;
    });
    console.log('tagNames', tagNames)
    return tagNames;
  }

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
            <BuildCard 
              key={build.id} 
              build={build} 
              tagNames={getTagNames(build, tags)} 
            />
          </a>
        </Link>
      ))}
    </div>
  );
}

export default Builds;