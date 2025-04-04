import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [filterTitle, setFilterTitle] = useState('');
    const [filterRating, setFilterRating] = useState('');

    const addMovie = (newMovie) => {
        setMovies([...movies, newMovie]);
    };

    const filteredMovies = movies.filter(movie => {
        return (
            movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
            (filterRating ? movie.rating >= filterRating : true)
        );
    });

    return (
        <div className="App">
            <h1>Movie App</h1>
            <Filter 
                setFilterTitle={setFilterTitle} 
                setFilterRating={setFilterRating} 
                addMovie={addMovie} 
            />
            <MovieList movies={filteredMovies} />
        </div>
    );
};

export default App;