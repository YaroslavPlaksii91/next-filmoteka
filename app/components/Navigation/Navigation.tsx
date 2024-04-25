import React from 'react';

import NavLink from '../NavLink/NavLink';
import { NAV_LINKS } from './constants';

const Navigation: React.FC = () => {
  return (
    <nav className="flex items-center space-x-4">
      {NAV_LINKS.map(link => (
        <NavLink key={link.id} href={link.href} text={link.text} />
      ))}
    </nav>
  );
};

export default Navigation;
