import { useState } from 'react';
import reviews from './data';
// React icons import
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa6';

const App = () => {
  const [index, setIndex] = useState(0
    
  );

  const { id, name, job, image, text } = reviews[index];

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
        </div>
      </article>
    </main>
  );
};
export default App;
