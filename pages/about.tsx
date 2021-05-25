import { FC } from 'react';

const About: FC = () => {
  return (
    <div className="text-center my-10 text-green-300 mx-10">
      <p>
        This site was made to showcase my projects the I have Build over the
        past.
      </p>

      <div className="my-8">
        <h1 className="text-xl mb-4">
          <span className="text-gray-600">#</span>
          <span className="underline">Usefull Links</span>
        </h1>
        <p className="text-green-700 font-bold">
          My Github:
          <a
            className="link ml-2 text-green-300"
            href="https://github.com/bineetNaidu"
          >
            /bineetNaidu
          </a>
        </p>

        <p className="text-green-700 font-bold">
          my Website:
          <a
            className="link ml-2 text-green-300"
            href="https://bineetnaidu.github.io"
          >
            bineetnaidu.io
          </a>
        </p>
      </div>

      <p className="mt-auto text-green-600">
        Find any broken links or any issues. Then Submit an issue
        <a
          href="https://github.com/bineetNaidu/my-projects/issues/new"
          className="link ml-1 text-purple-500"
        >
          here
        </a>
      </p>
    </div>
  );
};

export default About;
