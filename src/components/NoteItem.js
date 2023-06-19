import React, { useContext } from "react";
import NotesContext from "../context/Notes/NotesContext";

const NoteItem = (props) => {
  const context = useContext(NotesContext);
  const { deleteNote } = context;
  const { note } = props;
  return (
    <div className="col-md-3">
      <div class="card my-2" style={{border: 2+"px solid black"}}>
        <div class="card-body">
          <h5 class="card-title">{note.title}</h5>
          <p class="card-text">{note.description}</p>
          <i class="fa-sharp fa-solid fa-trash mx-2" onClick={()=>{deleteNote(note._id)}}></i>
          <i class="fa-solid fa-file-pen mx-2"></i>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
