import React, {useState} from "react";
import NotesContext from "./NotesContext";

const NotesState = (props) => {
    const host = "http://localhost:5000";
    const notesInitial = [];
      const [notes, setNotes] = useState(notesInitial);
      //Get all notes
      const fetchAllNotes = async () => {
        const response = await fetch(`${host}/api/notes/fetchAllNotes`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": window.localStorage.getItem('token')
          }
        });
        const json = await response.json();
        console.log(json);
        setNotes(json);
      }
      //Add a note
      const addNote = async (title, description, tag)=>{
        const response = await fetch(`${host}/api/notes/addNote`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": window.localStorage.getItem('token')
          },
          body: JSON.stringify({title, description, tag}),
        });
        console.log("Adding a note");
        const newNote = await response.json();
        //Logic to add a note
        let note = {
          "_id": newNote._id,
          "user": newNote.user,
          "title": title,
          "description": description,
          "tag": tag,
          "date": Date.now().toString(),
          "__v": newNote.__v
        }
        setNotes(notes.concat(note));
      }
      //Delete a note
      const deleteNote = async (id)=>{
        //API call to delete
        await fetch(`${host}/api/notes/deleteNote/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "auth-token": window.localStorage.getItem('token')
          }
        });
        //Logic to delete a note
        setNotes(notes.filter((note)=>{
          return note._id !== id;
        }));
      }
      //Edit a note
      const editNote = async (id, title, description, tag)=>{
        await fetch(`${host}/api/notes/updateNote/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "auth-token": window.localStorage.getItem('token')
          },
          body: JSON.stringify({title, description, tag}),
        });
        //Logic to edit a note
        let newNotes = JSON.parse(JSON.stringify(notes));
        for(let index = 0; index < newNotes.length; index++){
          if(newNotes[index]._id === id){
            newNotes[index].title = title;
            newNotes[index].description = description;
            newNotes[index].tag = tag;
            break;
          }
        }
        setNotes(newNotes);
      }
    return (
        <NotesContext.Provider value = {{notes, addNote, deleteNote, editNote, fetchAllNotes}}>
            {props.children}
        </NotesContext.Provider>
    );
}

export default NotesState;