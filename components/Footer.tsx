import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="flex justify-center items-center mt-auto font-mono text-lg">
      Made with <img className="h-8 ml-2" alt="React logo" src="/react.svg" />
    </footer>
  );
};

export default Footer;
