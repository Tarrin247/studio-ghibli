import React from 'react';
import { useEffect, useState } from 'react';




const App = () => {
    const [films, setFilms] = useState([]);


    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(res => res.json())
            .then(allFilms => setFilms(allFilms))
    }, []);


    return (
        <main className="container">
            <div class="btn-group" role="group" aria-label="Basic outlined example">
                <button type="button" class="btn btn-outline-primary">Films</button>
                <button type="button" class="btn btn-outline-primary">Stars</button>
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
            </section>
        </main>
    );
};

export default App;