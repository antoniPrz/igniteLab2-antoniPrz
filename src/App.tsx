import { client } from './lib/apollo';
import { gql, useQuery } from '@apollo/client';

import { useEffect } from 'react';

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title

      teacher {
        name
      }
    }
  }
`;

interface lesson {
  id: string;
  title: string;
}

function App() {
  const { data } = useQuery(GET_LESSONS_QUERY);

  console.log(data);

  return (
    <>
      {/* <h1 className='text-5xl font-bold text-violet-500 '>Hello mundo</h1>
      <p>holaaaaa</p> */}

      <ul>
        {data.lessons.map((lesson: lesson) => {
          <li>{lesson.title}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
