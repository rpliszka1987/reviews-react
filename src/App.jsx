import { useState } from 'react';
import reviews from './data';

const App = () => {
  const [index, setIndex] = useState(0);

  const { id, name, job, image, text } = reviews[index];

  console.log(name);

  return (
    <main>
      <h4>Hello</h4>
    </main>
  );
};
export default App;
