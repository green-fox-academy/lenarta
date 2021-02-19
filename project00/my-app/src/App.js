import { useState, useEffect } from 'react';
import './App.css';
import RenderedComponent from './RenderedComponent';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [beers, setBeers] = useState([]);

  const [renderStart, setrenderStart] = useState(0);
  const [renderEnd, setrenderEnd] = useState(7);
  const [fetchStart, setFetchStart] = useState(1);
  const [page, setPage] = useState(1);

  useEffect(() => {
    console.log(page);
    if (page === 1 || page % 4 === 0) {
      fetch(`https://api.punkapi.com/v2/beers?page=${fetchStart}&per_page=24`)
        .then((response) => response.json())
        .then(
          (response) => {
            setIsLoaded(true);
            setBeers(response);
            //setFetchStart(fetchStart + 1);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    }
  }, [page]);

  const renderedBeers = beers.filter((beer) => {
    return beer.id > renderStart && beer.id < renderEnd;
  });

  const handleClickNext = () => {
    setPage(page + 1);
    setrenderStart(renderStart + 6);
    setrenderEnd(renderEnd + 6);
  };
  const handleClickPrev = () => {
    setPage(page - 1);
    setrenderStart(renderStart - 6);
    setrenderEnd(renderEnd - 6);
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
              <RenderedComponent beer={beer} beers={beers} />
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
