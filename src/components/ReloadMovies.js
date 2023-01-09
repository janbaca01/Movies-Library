import './ReloadMovies'

const ReloadMovies = (props) => {
    return (
        <button type='button' onClick={props.reloadall} className='btn reload-all'>Načítať všetky filmy</button>
    )
}

export default ReloadMovies