import { GetStaticProps, InferGetStaticPropsType } from 'next';
import axios from '../utils/axios';
import Footer from '../components/Footer';
import ProjectList from '../components/ProjectList';
import { ProjectType } from '../utils/types';

export default function Home({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="bg-purple-400 app">
      <div className="flex justify-center text-4xl py-4 ">
        <h1>
          Hello 👋👋, I'm
          <a
            className="link ml-2"
            href="https://bineetnaidu-io.web.app"
            target="_black"
            rel="noopener"
          >
            Bineet
          </a>
        </h1>
      </div>

      <ProjectList projects={projects} />

      <Footer />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await axios.get('/');
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
    revalidate: 1, // ? In Seconds
  };
};
