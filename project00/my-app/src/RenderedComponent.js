import React from 'react';
import { useState } from 'react';

const RenderedComponent = ({ beers, beer }) => {
  const [item, setItem] = useState(
    <img src={beer.image_url} onClick={() => handleClickPic(beer.id)}></img>
  );
  const handleClickPic = (id) => {
    setItem(<p>{beers[id].description}</p>);
  };
  return <div className="item">{item}</div>;
};

export default RenderedComponent;
