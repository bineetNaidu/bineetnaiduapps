import { GetStaticProps, InferGetStaticPropsType } from 'next';
import axios from '../utils/axios';
import ProjectList from '../components/ProjectList';
import { ProjectType } from '../utils/types';

export default function Featured({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="bg-gray-900 text-white app font-mono">
      <ProjectList projects={projects} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await axios.get('/?featured=true');
  if (!data.success && !data.errors) {
    return {
      props: { projects: [] },
    };
  }

  const projects: ProjectType[] = data.data;

  return {
    props: {
      projects,
    },
    revalidate: 60, // ? In Seconds
  };
};
