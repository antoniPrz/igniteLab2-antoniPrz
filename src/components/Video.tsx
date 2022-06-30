import { DefaultUi, Player, Youtube } from '@vime/react';
import { gql, useQuery } from '@apollo/client';
import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Image,
  Lightning,
} from 'phosphor-react';

import '@vime/core/themes/default.css';

const GET_LESSONS_BY_SLUG_QUERY = gql`
  query GetLessonBySlug($slug: String) {
    lesson(where: { slug: $slug }) {
      title
      videoId
      description
      teacher {
        avatarURL
        bio
        name
      }
    }
  }
`;

interface GetLessonsBySlugResponse {
  lesson: {
    title: string;
    videoId: string;
    description: string;
    teacher: {
      bio: string;
      avatarURL: string;
      name: string;
    };
  };
}

interface VideoProps {
  lessonSlug: string;
}

export function Video(props: VideoProps) {
  const { data } = useQuery<GetLessonsBySlugResponse>(
    GET_LESSONS_BY_SLUG_QUERY,
    {
      variables: {
        slug: props.lessonSlug,
      },
    }
  );

  console.log(data);

  if (!data) {
    return (
      <div className='flex-1'>
        <h1>Cargando...</h1>
      </div>
    );
  }

  return (
    <>
      <div className='flex-1'>
        {/* section video */}
        <div className='bg-black flex justify-center'>
          <div className='h-full w-full max-w-[1100px] max-h-[60vh] aspect-video'>
            <Player>
              <Youtube videoId={data.lesson.videoId} />
              <DefaultUi />
            </Player>
          </div>
        </div>

        {/* section  information */}
        <div className='p-8 max-w-[1180px] mx-auto'>
          <div className='flex items-start gap-16'>
            {/* info */}
            <div className='flex-1'>
              <h1 className='text-2xl font-bold'>{data.lesson.title}</h1>
              <p className=' mt-4 text-gray-200 leading-relaxed'>
                {data.lesson.description}
              </p>

              {/* Avatar */}
              <div className='flex items-center gap-4 mt-6'>
                <img
                  className='h-16 w-16 rounded-full border-2  border-blue-500'
                  src={data.lesson.teacher.avatarURL}
                  alt=''
                />
                <div className='leading-relaxed'>
                  <strong className='font-bold text-2xl block'>
                    {data.lesson.teacher.name}
                  </strong>
                  <span className='text-gray-200 text-sm block'>
                    {data.lesson.teacher.bio}
                  </span>
                </div>
              </div>
            </div>

            {/* buttons */}
            <div className='flex flex-col gap-4'>
              <a
                href=''
                className=' p-4 flex text-sm bg-green-500 items-center rounded font-bold uppercase gap-2 justify-center  hover:bg-green-700 transition-colors '
              >
                <DiscordLogo size={24} />
                Comunidad de Discord
              </a>
              <a
                href=''
                className=' p-4 flex text-sm border border-blue-500 text-blue-500 items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors'
              >
                <Lightning size={24} />
                Accese al Desafio
              </a>
            </div>
          </div>
          {/* aditional information */}
          <div className='gap-8 mt-20 grid grid-cols-2'>
            {/* Material complementario */}
            <a
              className='bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors'
              href=''
            >
              <div className=' bg-green-700 h-full p-6 flex items-center'>
                <FileArrowDown size={40} />
              </div>
              <div className='py-6  leading-relaxed'>
                <strong className='text-2xl'>Material complementario</strong>
                <p className='text-sm text-gray-200 mt-2'>
                  Acesse o material complementar para acelerar o seu
                  desenvolvimento
                </p>
              </div>
              <div className='h-full p-6 flex items-center '>
                <CaretRight size={24} />
              </div>
            </a>
            {/* Walpapers */}
            <a
              className='bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors'
              href=''
            >
              <div className=' bg-green-700 h-full p-6 flex items-center'>
                <Image size={40} />
              </div>
              <div className='py-6  leading-relaxed'>
                <strong className='text-2xl'>Walpapers exclusivos</strong>
                <p className='text-sm text-gray-200 mt-2'>
                  Baixe wallpapers exclusivos do Ignite Lab e personalize a sua
                  máquina
                </p>
              </div>
              <div className='h-full p-6 flex items-center '>
                <CaretRight size={24} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
