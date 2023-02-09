import './MoviesFromApi.css'
import { useState, useEffect } from 'react'

const MovieFromApi2 = () => {
    const url = 'http://www.omdbapi.com/?t&apikey=c5fe139&s=batman'
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)


    const getRequest = async() => {
        const response = await fetch(url)
        const responseJson = await response.json()    
        if (responseJson.Search) {
            setData(responseJson.Search)
            console.log(responseJson.Search)

        }
        
        setLoading(false)
    }


    useEffect( () => {
        getRequest()
    }, [])


    if (loading){
    return (
        <div className='content'>
            <h1>Načítava sa stránka...</h1>
        </div>
    )}

    return (<section className='all-movies'>
            {
                data.map( (info, id) => {
                    return <div key={id} className="one-movie">
                            <img src={info.Poster} alt="" />
                            <h2>{info.Title}</h2>
                                <div className='movie-info'>
                                    <div className='rating'>
                                        <p>7.6</p>
                                    </div>
                                    <div className="any-info">
                                        <p>{info.Type}</p>
                                        <p>USA {info.Year}</p>
                                        <p>136min</p>
                                    </div>
                                </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptates expedita accusantium saepe aspernatur hic sint itaque maiores, aliquid assumenda optio et corporis doloribus nam nemo. Quaerat dolorum beatae facilis!</p>
                            <h4>Actors</h4>
                            <p>Janko Hraško, Anakin Poráč, Fuka mi Navaja</p>
                            </div>
                    })
            }
    </section>)
    
}

export default MovieFromApi2