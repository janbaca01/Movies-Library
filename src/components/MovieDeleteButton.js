import './MovieDeleteButton.css'

const MovieDeleteButton = (props) => {
    return (
        <>
            <button type="button" onClick={props.deleteMovie} className="delete-one"></button>
        </>
    )
}

export default MovieDeleteButton