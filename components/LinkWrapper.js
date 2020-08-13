import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

function LinkWrapper({ href, as, children }) {
  return (
    <Link href={href} as={as}>
      <a href={href}>{children}</a>
    </Link>
  );
}

LinkWrapper.propTypes = {
  href: PropTypes.string.isRequired,
  as: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default LinkWrapper;
