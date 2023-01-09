import './DeleteAllMovies'

const DeleteAllMovies = (props) => {
    return (
        <>
            <button type='button' onClick={props.deletemovies} className='btn delete-all'>Vzmazať všetko</button>
        </>
    )
}

export default DeleteAllMovies