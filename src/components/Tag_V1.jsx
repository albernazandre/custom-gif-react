import React, { useState, useEffect } from "react";
// axios facilita a requisicao fetch
import axios from "axios";

// API_KEY = capturando a chave que vai ser passada no fetch
const API_KEY = process.env.REACT_APP_API_KEY;

const Tag = () => {
    // vamos selecionar uma tag do gif que queremos (ex: cat gifs)
    const [tag, setTag] = useState('dogs');
    // o gif sera a url do gif
    const [gif, setGif] = useState('');

    const fetchGif = async (tag) => {
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
      
        const { data } = await axios.get(url); // promise...
        // capturando a url do gif
        const imageSrc = data.data.images.downsized_large.url;

        setGif(imageSrc);
    }

    // Se o array é deixado vazio, entao a funcao useEffect funciona como
    // um component did mount, o que quer dizer que so acontece
    // inicialmente na primeira renderizacao
    useEffect(() => {
      fetchGif();    
    }, []);

    const handleClick = () => {
        fetchGif(tag);
    }

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
