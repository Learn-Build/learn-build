import React from 'react';
import PropTypes from 'prop-types';
import ResponsiveHeading from './ResponsiveHeading';
import BuildCard from './BuildCard';
import {
  BuildListProps,
  TagListProps,
  UserListProps,
} from '../constants/propTypes';

function Builds({ builds, tags, users, header = 'Builds' }) {
  // FIXME(Renzo): change this when data fetching actually pulls data?
  function getTagNames(build) {
    const { tagIds } = build;
    const tagNames = tagIds.map((id) => {
      // eslint-disable-next-line no-underscore-dangle
      const foundTag = tags.find((tag) => tag.id === id);
      return foundTag.name;
    });
    return tagNames;
  }

  function getUserProps(build) {
    const { userId } = build;
    const userData = users.find((user) => user.id === userId);
    return { id: userData.id, name: userData.name };
  }

  return (
    <div>
      <ResponsiveHeading>{header}</ResponsiveHeading>
      {builds
        && builds.map((build) => (
          <BuildCard
            key={build.id}
            build={build}
            user={getUserProps(build)}
            tagNames={getTagNames(build)}
          />
        ))}
    </div>
  );
}

Builds.propTypes = {
  builds: PropTypes.oneOfType([PropTypes.number, BuildListProps]),
  tags: TagListProps.isRequired,
  users: UserListProps.isRequired,
  header: PropTypes.string,
};

Builds.defaultProps = {
  builds: null,
  header: 'Builds',
};

export default Builds;
