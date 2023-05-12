import React, { useState, useEffect } from "react";
// axios facilita a requisicao fetch
import axios from "axios";

// API_KEY = capturando a chave que vai ser passada no fetch
const API_KEY = process.env.REACT_APP_API_KEY;

const Random = () => {
    // o gif sera a url do gif
    const [gif, setGif] = useState('');


    const fetchGif = async () => {
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
      
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
        fetchGif();
    }

    return (
        <div className="container">
          <h1>Random Gif</h1>
          <img width="500" src={gif} alt='Random Gif' />
          <button onClick={handleClick}>CLICK FOR NEW GIF</button>
        </div>
    );
}

export default Random;
