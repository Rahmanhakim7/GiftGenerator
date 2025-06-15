import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Random = () => {
  const [gif, setGif] = useState('');

  const response = async () => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=ngLu6IYdbM16NdywilVY7lm67vzViIuT`;
    const { data } = await axios.get(url);
    const image = data.data.images.downsized_large.url;
    setGif(image);
  };

  useEffect(() => {
    response();
  }, []);

  const handClick = () => {
    response();
  };

  return (
    <div className="random">
      <h3>Your Gift Here : </h3>
      <img width={500} src={gif} alt="gift" />
      <div className='button'>
        <button onClick={handClick}>Generate New Gif</button>
      </div>
    </div>
  );
};

export default Random;
