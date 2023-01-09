import './MovieDeleteButton.css'
import { MdDelete } from "react-icons/md";

const MovieDeleteButton = (props) => {
    return (
        <>
            <button type="button" onClick={props.deletemovie} className="delete-one"><MdDelete /></button>
        </>
    )
}

export default MovieDeleteButton