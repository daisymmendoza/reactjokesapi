import React, { useState, useEffect} from 'react';

function App() {
  return (
    <div className="App">
      <LoadJokes></LoadJokes>
    </div>
  );
}

function LoadJokes() {
  const [jokes, setJokes] = useState([]);
  const [newJokes, setNewJokes] = useState(false);
  
  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random")
    .then ((resp) => resp.json())
    .then ((data) => setJokes(data))
  }, [newJokes]);
  return (
    <div className="joke">
      <h2>{jokes.value}</h2>
      <button onClick={() => setNewJokes(!newJokes)}>New Joke</button>
    </div>
  );
}

export default App;