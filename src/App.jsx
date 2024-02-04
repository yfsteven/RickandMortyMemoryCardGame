import { useState, useEffect } from 'react'
import Card from "./components/Card.jsx"
import './App.css'
import { getCharacter } from 'rickmortyapi'

function App() {
  const [characters, setCharacter] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const theSmiths = await getCharacter([1, 2, 3, 4, 5 ]);
        setCharacter([theSmiths.data])
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData(); 
  }, []);
  console.log(characters[0])
  return (
    <div>
     {characters[0].map(({id, image}) => {
        return <Card key={id} photo={image} />
      })}
    </div>
  )
}

export default App
