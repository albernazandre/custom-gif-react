// Nosso cutom hook que irá simplificar o codigo

import { useState, useEffect } from "react";
// axios facilita a requisicao fetch
import axios from "axios";

// API_KEY = capturando a chave que vai ser passada no fetch
const API_KEY = process.env.REACT_APP_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {

    // o gif sera a url do gif
    const [gif, setGif] = useState('');

    const fetchGif = async (tag) => {
      
        const { data } = await axios
          .get(tag ? `${url}&tag=${tag}` : url); // usando tag ou nao
        // capturando a url do gif
        const imageSrc = data.data.images.downsized_large.url;

        setGif(imageSrc);
    }

    // Se o array é deixado vazio, entao a funcao useEffect funciona como
    // um component did mount, o que quer dizer que so acontece
    // inicialmente na primeira renderizacao
    useEffect(() => {
      fetchGif();    
    }, [tag]);
    

    // vamos retornar estes dois para que possamos tbm utilizar a funcao fetchGif nos components
    // Random_V@ e Tag_V2
    return { gif, fetchGif };

}

export default useGif;
