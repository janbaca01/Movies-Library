import './Movie.css'
import data from '../Data'
import MovieDeleteButton from './MovieDeleteButton'
import { useState } from 'react'


const Movie = () => {
    const [movieList, setMovieList] = useState(data)

    const deleteOneMovie = (idecko) => {
        const filteredMovies = movieList.filter( (oneMovie) => {
            return oneMovie.id !== idecko
        })
        setMovieList(filteredMovies)
    }

    return (
        <>
            {
                movieList.map( (oneMovie) => {
                    const {id, image, title, age, tags, description} = oneMovie

                    return <div key={id} className="one-movie">
                        <img src={image} alt="" />
                        <h2>{title}</h2>
                        <p>{age}</p>
                        <p>{tags}</p>
                        <p>{description}</p>
                        <MovieDeleteButton deleteMovie={() => deleteOneMovie(id)} />
                    </div>
                })
            }
        </>
    )
}

export default Movie