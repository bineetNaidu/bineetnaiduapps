import { FC, useCallback, memo } from 'react';
import { ProjectType } from '../utils/types';

interface Props {
  project: ProjectType;
}

interface ProjectLinkProps {
  featured: boolean;
  github: string;
  url: string;
}

const ProjectLinks: FC<ProjectLinkProps> = ({ featured, github, url }) => {
  return (
    <div className="rounded-full bg-amber-50 text-amber-900 px-2 py-0.5 flex items-center space-x-1 flex-row-reverse">
      {featured && (
        <dt className="text-amber-500">
          <span className="sr-only">Featured</span>
          <svg width="16" height="20" fill="yellow">
            <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
          </svg>
        </dt>
      )}
      {github && (
        <dd>
          <a target="_blank" rel="noopener" href={github}>
            <img
              src="/github.png"
              className="h-8 cursor-pointer"
              alt="Github Logo"
            />
          </a>
        </dd>
      )}
      {url && (
        <dd>
          <a target="_blank" rel="noopener" href={url}>
            <img
              src="/browser.png"
              className="h-8 cursor-pointer"
              alt="Web browser Logo"
            />
          </a>
        </dd>
      )}
    </div>
  );
};

const Project: FC<Props> = ({ project }) => {
  return (
    <article className="mx-auto w-full p-2 cursor-pointer hover:bg-purple-900 transition-all rounded z-10">
      <ProjectLinks
        featured={project.featured}
        github={project.github}
        url={project.url}
      />
      <div className="min-w-0 relative flex-auto flex flex-col">
        <h2 className="sm:text-3xl text-lg font-semibold my-0.5 text-purple-300">
          <span>{project.name}</span>
        </h2>
        <dl className="flex flex-wrap text-sm font-medium whitespace-pre">
          <div className="text-xs sm:text-sm text-gray-500">
            <dt className="sr-only">Status</dt>
            <dd>
              <abbr title={`Status: ${project.status}`}>{project.status}</abbr>
            </dd>
          </div>
          <div className="flex-none w-full mt-0.5 font-normal">
            <dd className="inline italic whitespace-pre-wrap text-green-200">
              {project.description}
            </dd>
          </div>
        </dl>
      </div>
    </article>
  );
};

export default memo(Project);
