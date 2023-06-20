import React, { useContext, useState } from "react";
import NotesContext from "../context/Notes/NotesContext";

const AddNote = (props) => {
  const context = useContext(NotesContext);
  const { addNote } = context;
  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "default",
  });
  const onChange = (e) => {
    setNote({ ...note, [e.target.id]: e.target.value });
  };
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({title:"", description:"", tag:"default"});
    props.showAlert("Note Added Successfully", "success");
  };
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
            minLength={5}
            value={note.title}
            required
            style={{border:"1px solid black"}}
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
            minLength={5}
            value={note.description}
            required
            style={{border:"1px solid black"}}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            onChange={onChange}
            value={note.tag}
            style={{border:"1px solid black"}}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary my-2"
          onClick={handleClick}
          disabled = {note.title.length<5 || note.description.length<5}
        >
          Add Note
        </button>
      </form>
    </div>
  );
};

export default AddNote;
