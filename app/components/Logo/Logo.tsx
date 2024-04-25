import { ROUTES } from '@/app/utils/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo: React.FC = () => {
  return (
    <Link
      href={ROUTES.HOME}
      className="flex items-center transition-transform hover:scale-110"
    >
      <Image
        src="/logo.png"
        alt="Logo"
        width={48}
        height={48}
        className="rounded-full"
      />
      <p className="ml-2 text-2xl font-extrabold text-white">Moviec</p>
    </Link>
  );
};

export default Logo;
