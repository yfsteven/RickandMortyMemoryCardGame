import { useState, useEffect } from 'react'
import Card from "./components/Card.jsx"
import './App.css'
import { getCharacter } from 'rickmortyapi'

function App() {
  const [characters, setCharacter] = useState([]);

  const fetchData = async () => {
    try {
      const theSmiths = await getCharacter([1, 2, 3, 4, 5 ]);
      const data =  await theSmiths.data
      setCharacter([data])
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchData(); 
  }, []);
  console.log(characters[0])
  return (
    <div>
     {characters.length > 0 ? characters[0].map(({id, image}) => {
        return <Card key={id} photo={image} />
      }) : <p>Loading</p>}
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
*/

export default App
