import React, {useContext, useState} from "react";
import NotesContext from "../context/Notes/NotesContext";

const AddNote = () => {
    const context = useContext(NotesContext);
    const { addNote } = context;  
    const [note, setNote] = useState({title: "", description: "", tag: "default"});
    const onChange = (e) => {
        setNote({...note, [e.target.id]: e.target.value});
    }
    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
    }
    return (
        <div className="my-1">
        <h2>Add a Note</h2>
        <form className="my-3">
            <div className="mb-3">
            <label htmlFor="title" className="form-label">
                Title
            </label>
            <input
                type="text"
                className="form-control"
                id="title"
                aria-describedby="emailHelp"
                name="title"
                onChange={onChange}
            />
            </div>
            <div className="mb-3">
            <label for="Description" className="form-label">
                Description
            </label>
            <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                onChange={onChange}
            />
            </div>
            <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label mu-2" htmlFor="exampleCheck1">
                Check me out
            </label>
            </div>
            <button type="submit" className="btn btn-primary my-2" onClick={handleClick}>
            Add Note
            </button>
        </form>
        </div>
  );
};

export default AddNote;
