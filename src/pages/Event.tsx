import { useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { Video } from '../components/Video';

// nota con esta linea , aqui se colocaca que el dato es un objeto clase 3 min 48:05
// const { slug } = useParams<{ slug: string }>();

export function Event() {
  const { slug } = useParams<{ slug: string }>();
  console.log(slug);
  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <Header />
        <main className='flex flex-1'>
          {slug ? <Video lessonSlug={slug} /> : <div className='flex-1' />}
          <Sidebar />
        </main>
      </div>
    </>
  );
}
