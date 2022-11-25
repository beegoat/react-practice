import React from 'react';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';




function App(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
        // const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`);
        // const json = await response.json();
        const json = await(
            await fetch(
                `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
            )
        ).json();
        setMovies(json.data.movies);
        setLoading(false); 
        console.log(json)
    }

    useEffect(() => {
        getMovies();
    }, []);


    // useEffect(() => {
    //     fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)
    //     .then((response) => response.json())
    //     .then((json) => {
    //         setMovies(json.data.movies);
    //         setLoading(false);
    //     });
    // }, [])

    return(
        <div>
            {loading? <h1>Loading...</h1> : <div>{movies.map(
                movie => 
                <div key={movie.id}>
                <img src={movie.medium_cover_image} />
                <h1>{movie.title}</h1>
                <p>{movie.summary}</p>
                <ul>
                    {movie.genres.map((g) => (
                        <li key={g}>{g}</li>
                    ))}
                </ul>
                </div>
            )}</div>}
        </div>
    )

}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)
reportWebVitals();
