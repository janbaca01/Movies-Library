import './MovieFromApi.css'
import { useState, useEffect } from 'react'

const MovieFromApi = () => {
    const [loading, setLoading] = useState(true)
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [runTime, setRunTime] = useState("")
    const [country, setCountry] = useState("")
    const [imdbRating, setImdbRating] = useState("")
    const [year, setYear] = useState("")
    const [actors, setActors] = useState("")




    const url = "http://www.omdbapi.com/?i=tt3896198&apikey=c5fe139"



    useEffect( () => {
        fetch(url)
            .then( (response) => response.json() )
            .then( (data) => data )
            .then( (movie) => {
                console.log(movie)
                setTitle(movie["Title"])
                setCategory(movie["Genre"])
                setDescription(movie["Plot"])
                setImage(movie["Poster"])
                setRunTime(movie["Runtime"])
                setCountry(movie["Country"])
                setImdbRating(movie["imdbRating"])
                setYear(movie["Year"])
                setActors(movie["Actors"])



            })
        setLoading(false) 
    }, [])

    if (loading){
        return (
            <div className='content'>
                <h1>Načítava sa stránka...</h1>
            </div>
        )
    }
    
    return (
        <section className='all-movies'>
                <div className="one-movie">
                    <img src={image} alt="" />
                    <h2>{title}</h2>
                        <div className='movie-info'>
                            <div className='rating'>
                                <p>{imdbRating}</p>
                            </div>
                            <div className="any-info">
                                <p>{category}</p>
                                <p>{country} {year}</p>
                                <p>{runTime}</p>
                            </div>
                        </div>
                    <p>{description}</p>
                    <h4>Actors</h4>
                    <p>{actors}</p>
                </div>
        </section>
        )
}

export default MovieFromApi