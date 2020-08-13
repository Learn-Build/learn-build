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
