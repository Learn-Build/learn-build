import Link from 'next/link';

function LinkWrapper({ href, as, children }) {
  return (
    <Link href={href} as={as}>
      <a>{children}</a>
    </Link>
  );
}

export default LinkWrapper;
