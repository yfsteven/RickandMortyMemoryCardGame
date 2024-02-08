import { useState, useEffect } from 'react'
import Card from "./components/Card.jsx"
import './App.css'
import { getCharacter } from 'rickmortyapi'

function App() {
  const [characters, setCharacter] = useState([]);
  const [count, setCount] = useState(0);
  const [mortyStatus, setMortyStatus] = useState([]);
  const [highScore, setHighScore] = useState(0);

  const increment = () => {
    setCount((prevState) => prevState + 1);
  }

  const noClickTwice = (id) => {
    shuffle();
    if (!mortyStatus.includes(id)) {
      increment();
      setMortyStatus([...mortyStatus, id]);
    } else {
      setMortyStatus([]);
      setCount(0);
    }
  }
  const mortyArray = [ 2, 118, 206, 43, 44, 61, 73, 77, 83, 84, 95, 123, 53, 113, 143, 18, 21, 27, 42, 14, 392 ];
  const fetchData = async () => {
    try {
      const mortys = await getCharacter(mortyArray);
      const data =  await mortys.data
      setCharacter(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const recordHighScore = () => {
    if(count > highScore) {
      setHighScore(count);
    }
  }

  const shuffle = () => {
    const shuffledMortys = [...characters, ...characters].sort(() => Math.random() - 0.5);

    setCharacter(shuffledMortys);
  }


  useEffect(() => {
    recordHighScore();
  }), [increment];
 
  useEffect(() => {
    fetchData(); 
  }, []);

  return (
    <div>
      <div className="app--header">
        <h1>Rick and Morty Memory Card</h1>
        <h1>Current Score: {count} High Score: {highScore}</h1>
      </div>
      <div className="cards--container">
      {characters.length > 0 && characters.map(({id, name, image}) => {
          return <Card id={id} title={name} photo={image} click={(x) => {noClickTwice(x);}}/>
        })}
      </div>

    </div>
  )
}


export default App
