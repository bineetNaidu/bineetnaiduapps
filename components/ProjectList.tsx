import { FC } from 'react';
import { ProjectType } from '../utils/types';

type Props = {
  projects: ProjectType[];
};

const ProjectList: FC<Props> = ({ projects }) => {
  return (
    <div>
      {projects.length > 0 &&
        projects.map((p) => <h1 key={p._id}>{p.name}</h1>)}
    </div>
  );
};

export default ProjectList;
