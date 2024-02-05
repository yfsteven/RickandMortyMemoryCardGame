import { useState, useEffect } from 'react'
import Card from "./components/Card.jsx"
import './App.css'
import { getCharacter } from 'rickmortyapi'

function App() {
  const [characters, setCharacter] = useState([]);

  const fetchData = async () => {
    try {
      const mortys = await getCharacter([ 2, 118, 206, 43, 44, 61, 73, 77, 83, 84, 95, 123, 53, 113, 143, 18, 21, 27, 42, 14, 392 ]);
      const data =  await mortys.data
      setCharacter([data])
    } catch (error) {
      console.log("error", error);
    }
  };
 
  useEffect(() => {
    fetchData(); 
  }, []);

  return (
    <div className="cards--container">
     {characters.length > 0 && characters[0].map(({id, name, image}) => {
        return <Card id={id} title={name} photo={image} />
      })}
    </div>
  )
}

/*
/*
const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function getCharacters() {
      const res = await fetch("https://rickandmortyapi.com/api/character");
      const data = await res.json();

      setCharacters(data.results);
    }
    getCharacters();
  }, [])
  console.log(characters);
  return (
    <div>
      {characters.length > 0 ? characters.map(({id, image}) => {
        return <Card key={id} photo={image}/>
      }) : <div>Loading..</div>}
    </div>
  )
*/


export default App
