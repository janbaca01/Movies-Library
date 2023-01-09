import './Movie.css'
import data from '../Data'
import MovieDeleteButton from './MovieDeleteButton'
import DeleteAllMovies from './DeleteAllMovies'
import ReloadMovies from './ReloadMovies'
import { useState } from 'react'


const Movie = () => {
    const [movieList, setMovieList] = useState(data)

    const deleteOneMovie = (idecko) => {
        const filteredMovies = movieList.filter( (oneMovie) => {
            return oneMovie.id !== idecko
        })
        setMovieList(filteredMovies)
    }

    const deleteMovies = () => {
        setMovieList([])
    }

    const reloadMovies = () => {
        setMovieList(data)
    }

    return (    
        <>
            <section className='all-movies'>
            {
                movieList.map( (oneMovie) => {
                    const {id, image, title, age, tags, description} = oneMovie

                    return <div key={id} className="one-movie">
                        <img src={image} alt="" />
                        <h2>{title}</h2>
                        <p>{age}</p>
                        <p>{tags}</p>
                        <p>{description}</p>
                        <MovieDeleteButton deletemovie={() => deleteOneMovie(id)} />
                    </div>
                })
            }
            
        </section>
        <div className="btn-area">
            <DeleteAllMovies deletemovies={() => deleteMovies()} />
            <ReloadMovies reloadall={() => reloadMovies()} />
        </div>
        </>
    )
}

export default Movie