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
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ4ZGM0YTY1NjVmMDhhYTkwYTFkODIxIn0sImlhdCI6MTY4NzE5MzcwMn0.1HKDdBHr_wXiC2eSIbHEvHiRt1iBt7YL9Ui8Iibv01A"
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
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ4ZGM0YTY1NjVmMDhhYTkwYTFkODIxIn0sImlhdCI6MTY4NzA2MzQwNX0.u5M4RbyHKDsoZmcoOhq7YYOEb8WYkVr83NmCh9M2mPs"
          },
          body: JSON.stringify({title, description, tag}),
        });
        console.log("Adding a note");
        //Logic to add a note
        let note = {
          "_id": "648ec912aa6b8cd3d0d2b397f",
          "user": "648dc4a6565f08aa90a1d821a",
          "title": title,
          "description": description,
          "tag": tag,
          "date": Date.now().toString(),
          "__v": 0
        }
        setNotes(notes.concat(note));
      }
      //Delete a note
      const deleteNote = (id)=>{
        //Logic to delete a note
        setNotes(notes.filter((note)=>{
          return note._id !== id;
        }));
      }
      //Edit a note
      const editNote = async (id, title, description, tag)=>{
        const response = await fetch(`${host}/api/notes/updateNote/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ4ZGM0YTY1NjVmMDhhYTkwYTFkODIxIn0sImlhdCI6MTY4NzA2MzQwNX0.u5M4RbyHKDsoZmcoOhq7YYOEb8WYkVr83NmCh9M2mPs"
          },
          body: JSON.stringify({title, description, tag}),
        });
        //Logic to edit a note
        for(let index = 0; index < notes.length; index++){
          if(notes[index]._id === id){
            notes[index].title = title;
            notes[index].description = description;
            notes[index].tag = tag;
            break;
          }
        }
      }
    return (
        <NotesContext.Provider value = {{notes, addNote, deleteNote, editNote, fetchAllNotes}}>
            {props.children}
        </NotesContext.Provider>
    );
}

export default NotesState;