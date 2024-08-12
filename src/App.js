import { useState } from 'react';

/* explicação melhor Aula 4 Parte 2 - a partir do 28:00*/
import { FaStar } from 'react-icons/fa';


function StarRating({ nStarts }) {
  const [rate, setRate] = useState(0);
  const starList = Array.from({ length: nStarts }, (_, k) => k + 1)

  function evaluate(star) {
    setRate(star)
  }

  return (
    <>
      {
        starList.map(
          (n) => <FaStar
            onClick={_ => evaluate(n)}
            color={n <= rate ? 'gold' : 'lightgray'}></FaStar>
        )
      }
      <p>O rate atual é {rate}</p>
    </>
  )
}

export default function App() {
  return (
    <StarRating nStarts={5} />
  );
}