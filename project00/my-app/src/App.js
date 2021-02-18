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

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="App">
        <div className="content">
          <h1>Beers</h1>
          {beers.map((beer) => (
            <div className="beers" key={beer.id}>
              <h1>{beer.name}</h1>
              <img src={beer.image_url}></img>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default App;
