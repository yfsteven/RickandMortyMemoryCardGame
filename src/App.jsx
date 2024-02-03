import { useState, useEffect } from 'react'
import Card from "./components/Card.jsx"
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [characters, setCharacter] = useState([]);


  useEffect(() => {
    const apiUrl = "https://rickandmortyapi.com/api/character";

    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setCharacter([data.results]);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData(); 
  }, []);
  console.log(characters[0]);
  return (
    <div>
      {characters[0].map(({id, image}) => {
        return <Card key={id} photo={image} />
      })}
    </div>
  )
}

export default App
