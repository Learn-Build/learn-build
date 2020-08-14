import PropTypes from 'prop-types';

export const TagProps = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
});

export const TagListProps = PropTypes.arrayOf(TagProps);

export const BuildProps = PropTypes.shape({
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  user: PropTypes.string,
  tagIds: PropTypes.arrayOf(PropTypes.string),
  favoriteCount: PropTypes.number,
});

export const BuildListProps = PropTypes.arrayOf(BuildProps);

export const ResourceProps = PropTypes.shape({
  id: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  description: PropTypes.string,
  comments: PropTypes.arrayOf(PropTypes.string),
  imageUrl: PropTypes.string,
  tagIds: PropTypes.arrayOf(PropTypes.string),
});

export const ResourceListProps = PropTypes.arrayOf(ResourceProps);

export const UserProps = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
});

export const UserListProps = PropTypes.arrayOf(UserProps);
