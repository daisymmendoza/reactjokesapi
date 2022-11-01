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
  
  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random")
    .then ((resp) => resp.json())
    .then ((data) => setJokes(data))
  }, []);
  return (
    <div className="jokes">
        <Joke jokes={jokes}></Joke>
    </div>
  );
}

function Joke(props) {
  const {value} = props.jokes;
  return (
    <div className="joke">
      <h2>{value}</h2>
      <button>New Joke</button>
    </div>
  );
}

export default App;
