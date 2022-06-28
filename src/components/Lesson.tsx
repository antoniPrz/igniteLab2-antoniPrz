import { CheckCircle, Lock } from 'phosphor-react';
import { isPast, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { es } from 'date-fns/locale';

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
  const isLessonAvailable = isPast(props.availableAt);
  const availableDateFormated = format(
    props.availableAt,
    "EEEE' • 'd' de 'MMMM' • ' k'h'mm",
    { locale: es }
  );
  return (
    <>
      <a href='https://'>
        <span className='text-gray-300'>{availableDateFormated}</span>
        <div className='rounded border border-gray-500 p-4 mt-2'>
          <header className='flex items-center justify-between'>
            {isLessonAvailable ? (
              <span className=' flex items-center gap-2 text-sm text-blue-500 font-medium'>
                <CheckCircle size={20} />
                Contenido disponible
              </span>
            ) : (
              <span className=' flex items-center gap-2 text-sm text-orange-500 font-medium'>
                <Lock size={20} />
                Pronto...
              </span>
            )}
            <span className='text-xs font-bold text-white py-[0.125rem] px-2 rounded border border-green-300'>
              {props.type === 'live' ? 'EN VIVO' : 'CLASE'}
            </span>
          </header>
          <strong className=' text-gray-200 mt-5 block '>{props.title}</strong>
        </div>
      </a>
    </>
  );
}
