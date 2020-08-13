import React from 'react';
import PropTypes from 'prop-types';
import ResponsiveHeading from './ResponsiveHeading';
import BuildCard from './BuildCard';
import { BuildListProps, TagListProps } from '../constants/propTypes';

function Builds({ builds, tags, header = 'Builds' }) {
  // FIXME(Renzo): change this when data fetching actually pulls data?
  function getTagNames(build) {
    const { tagIds } = build;
    const tagNames = tagIds.map((id) => {
      const foundTag = tags.find((tag) => tag.id === id);
      return foundTag.name;
    });
    return tagNames;
  }

  return (
    <div>
      <ResponsiveHeading>{header}</ResponsiveHeading>
      {builds.map((build) => (
        <BuildCard key={build.id} build={build} tagNames={getTagNames(build)} />
      ))}
    </div>
  );
}

Builds.propTypes = {
  builds: BuildListProps,
  tags: TagListProps,
  header: PropTypes.string,
};

Builds.defaultProps = {
  builds: [],
  tags: [],
  header: 'Builds',
};

export default Builds;
