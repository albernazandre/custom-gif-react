// A verdao 2 utiliza custom hooks, veja a diferença para o TagV1
import React, { useState } from "react";

import useGif from '../useGif';

const Tag = () => {

     // vamos selecionar uma tag do gif que queremos (ex: cat gifs)
     const [tag, setTag] = useState('dogs');
     const {gif, fetchGif } = useGif(tag);

     const handleClick = () => fetchGif(tag);

    return (
        <div className="container">
          <h1>Random {tag} Gif</h1>
          <img width="500" src={gif} alt='Random Gif' />
          <input 
            value={tag} 
            onChange={(event) => setTag(event.target.value)} />
          <button onClick={handleClick}>CLICK FOR NEW GIF</button>
        </div>
    );
}

export default Tag;
