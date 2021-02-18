import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [beers, setBeers] = useState([]);

  const [renderStart, setrenderStart] = useState(0);
  const [renderEnd, setrenderEnd] = useState(7);

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

  //const [renderedBeers, setRenderedBeers] = useState([]);

  const renderedBeers = beers.filter((beer) => {
    return beer.id > renderStart && beer.id < renderEnd;
  });

  const handleClickNext = () => {
    setrenderStart(renderStart + 6);
    setrenderEnd(renderEnd + 6);
  };
  const handleClickPrev = () => {
    setrenderStart(renderStart - 6);
    setrenderEnd(renderEnd - 6);
  };
  const handleClickPic = (id) => {
    console.log(beers[id].description);
  };

  const previousButton = renderEnd > 7;

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
              <img
                src={beer.image_url}
                onClick={() => handleClickPic(beer.id)}
              ></img>
              <h1>{beer.name}</h1>
            </div>
          ))}
        </div>
        <div className="paginator">
          {previousButton && (
            <button id="previous" onClick={handleClickPrev}>
              Previous
            </button>
          )}

          <button id="next" onClick={handleClickNext}>
            Next
          </button>
        </div>
      </div>
    );
  }
}
export default App;
