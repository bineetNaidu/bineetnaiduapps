import { FC } from 'react';
import { ProjectType } from '../utils/types';
import Project from './Project';

type Props = {
  projects: ProjectType[];
};

const ProjectList: FC<Props> = ({ projects }) => {
  return (
    <div>
      {projects.length > 0 &&
        projects.map((p) => <Project project={p} key={p._id} />)}
    </div>
  );
};

export default ProjectList;
