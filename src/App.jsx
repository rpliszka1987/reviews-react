import { useState } from 'react';
import reviews from './data';
import { FaBeer } from 'react-icons/fa';

const App = () => {
  const [index, setIndex] = useState(0);

  const { id, name, job, image, text } = reviews[index];

  return (
    <div>
      <h2>Reviews Starter</h2>
      <FaBeer className="beer" />
    </div>
  );
};
export default App;
