import PropTypes from 'prop-types';

export const TagProps = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
});

export const TagListProps = PropTypes.arrayOf(TagProps);

export const BuildProps = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  builder: PropTypes.string,
  tagIds: PropTypes.arrayOf(PropTypes.string),
  likeCount: PropTypes.number,
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
