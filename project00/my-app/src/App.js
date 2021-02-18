import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    fetch('https://api.punkapi.com/v2/beers')
      .then((response) => response.json())
      .then(
        (response) => {
          setIsLoaded(true);
          setBeers(response);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  const [renderStart, setrenderStart] = useState(0);
  const [renderEnd, setrenderEnd] = useState(7);

  const renderedBeers = beers.filter((beer) => {
    return beer.id > renderStart && beer.id < renderEnd;
  });

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="App">
        <h1>Beers</h1>
        <div className="content">
          {renderedBeers.map((beer) => (
            <div className="beers" key={beer.id}>
              <img src={beer.image_url}></img>
              <h1>{beer.name}</h1>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default App;
