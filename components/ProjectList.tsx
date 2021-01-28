import { FC, memo } from 'react';
import { ProjectType } from '../utils/types';
import List from './List';
import Project from './Project';

type Props = {
  projects: ProjectType[];
};

const ProjectList: FC<Props> = ({ projects }) => {
  return (
    <div className="flex z-10 justify-center">
      <List>
        {projects.length > 0 &&
          projects.map((p) => <Project project={p} key={p._id} />)}
      </List>
    </div>
  );
};

export default memo(ProjectList);
