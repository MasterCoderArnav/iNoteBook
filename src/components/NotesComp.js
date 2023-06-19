import React, { useContext } from 'react'
import NotesContext from "../context/Notes/NotesContext";
import NoteItem from './NoteItem';

const NotesComp = () => {
    const context = useContext(NotesContext);
    const { notes, setNotes } = context;
  return (
    <div className='row my-3'>      
        {notes.map((note) => {
            return <NoteItem note = {note}/>;
        })}
    </div>
  )
}

export default NotesComp
