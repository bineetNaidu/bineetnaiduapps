import { FC } from 'react';
import Link from 'next/link';

const Tabs: FC = () => {
  const linkButton =
    'inline-block py-1 px-5 border-4 border-purple-500 m-1 text-white rounded box-border font-light text-center transition-all cursor-pointer hover:bg-green-500 hover:border-opacity-0';

  return (
    <nav className="top-0 flex justify-center items-center sticky w-full z-50">
      <Link href="/featured">
        <a className={linkButton}>Featured</a>
      </Link>
      <Link href="/">
        <a className={linkButton}>Home</a>
      </Link>
      <Link href="/about">
        <a className={linkButton}>About</a>
      </Link>
    </nav>
  );
};

export default Tabs;
