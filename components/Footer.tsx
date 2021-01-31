import { FC, memo } from 'react';

const Footer: FC = () => {
  return (
    <footer className="flex justify-center items-center mt-auto font-mono text-lg text-blue-200 pb-4">
      Build with <img className="h-8 ml-2" alt="React logo" src="/react.svg" />
    </footer>
  );
};

export default memo(Footer);
