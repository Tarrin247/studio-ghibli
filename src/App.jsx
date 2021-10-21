import React from 'react';
import { useEffect, useState } from 'react';




const App = () => {
    const [films, setFilms] = useState([]);
    const [stars, setStars] = useState([]);

    // useEffect(() => {
    //     fetch('https://ghibliapi.herokuapp.com/films')
    //         .then(res => res.json())
    //         .then(allFilms => setFilms(allFilms))
    // }, []);

    const getFilms = () => {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(res => res.json())
            .then(allFilms => setFilms(allFilms))
    };

    const getStars = () => {
        fetch('https://ghibliapi.herokuapp.com/people')
            .then(res => res.json())
            .then(allStars => setStars(allStars))
    };

    return (
        <main className="container">
            <div class="btn-group" role="group" aria-label="Basic outlined example">
                <button onClick={() => getFilms()}
                    type="button"
                    class="btn btn-outline-dark">Films</button>
                <button onClick={() => getStars()}
                    type="button"
                    class="btn btn-outline-dark">
                    Stars
                </button>
                <button onClick="refreshPage()"
                    type="button"
                    class="btn btn-outline-dark">
                    Home
                </button>
            </div>
            <section className="row justify-content-center mt-5">
                {films.map(film => (
                    <div className="col-md-6" key={`film-card-${film.id}`}>
                        <div className="card shadow-lg my-2">
                            <div className="card-body">
                                <h4 className="card-title">{film.title}</h4>
                                <p className="card-subtitle text-muted">Director: {film.director}</p>
                                <p className="card-text">Release date: {film.release_date}</p>
                                <p className="card-text">Rotten Tomates Score: {film.rt_score}</p>
                            </div>
                        </div>
                    </div>
                ))}
            
                {stars.map(star => (
                    <div class="card" style={{width:"18 em"}} key={`star-card-${star.id}`}>
                        <div className="card ">
                            <h5 class="card-title">Name: {star.name}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Age: {star.age}</h6>
                            <p class="card-text">Gender: {star.gender}</p>
                            <a href="#" class="card-link">Films: {star.films}</a>
                            <a href="#" class="card-link"></a>
                        </div>
                    </div>
                ))}
            </section>
        </main>
    );
};

export default App;