import Link from 'next/link';
import React from 'react';

import type { NavLinkProps } from './types';

const NavLink: React.FC<NavLinkProps> = ({ href, text }) => {
  return (
    <Link
      href={href}
      className="text-sm font-bold uppercase text-white hover:opacity-60 transition-opacity"
    >
      {text}
    </Link>
  );
};

export default NavLink;
