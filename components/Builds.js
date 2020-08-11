import { Heading } from "@chakra-ui/core";
import BuildCard from "./BuildCard";

function Builds({ builds, tags }) {

  // FIXME(Renzo): change this when data fetching actually pulls data?
  function getTagNames(build, tags) {
    const { tagIds } = build;
    const tagNames = tagIds.map((id) => {
      const foundTag = tags.find((tag) => tag.id === id);
      return foundTag.name;
    });
    return tagNames;
  }

  const responsiveAlign = ['center', 'center', 'left', 'left'];

  return (
    <div>
      <Heading 
        as="h2"
        mb={2}
        textAlign={responsiveAlign}
      >
        Builds
      </Heading>
      {builds.map((build) => (
        <BuildCard 
          key={build.id} 
          build={build} 
          tagNames={getTagNames(build, tags)} 
        />
      ))}
    </div>
  );
}

export default Builds;