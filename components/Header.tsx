import { FC } from 'react';
import Tabs from './Tabs';

const Header: FC = () => {
  return (
    <>
      <div className="flex justify-center text-center text-3xl py-4 text-purple-200">
        <h1>
          Hello 👋👋, I'm
          <a
            className="link ml-2"
            href="https://bineetnaidu.github.io"
            target="_black"
            rel="noopener"
          >
            Bineet
          </a>
        </h1>
      </div>
      <Tabs />
    </>
  );
};

export default Header;
