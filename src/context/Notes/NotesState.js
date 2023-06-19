import React, {useState} from "react";
import NotesContext from "./NotesContext";

const NotesState = (props) => {
    const notesInitial = [
        {
          "_id": "648e920abe75012df0380d06",
          "user": "648dc4a6565f08aa90a1d821",
          "title": "My first note updated",
          "description": "This is my first note in the DB is updated",
          "tag": "General",
          "date": "2023-06-18T05:11:38.531Z",
          "__v": 0
        },
        {
          "_id": "648ec912aa6b8cd3d0d2b397",
          "user": "648dc4a6565f08aa90a1d821",
          "title": "My second note",
          "description": "This is my second note in the DB",
          "tag": "General",
          "date": "2023-06-18T09:06:26.831Z",
          "__v": 0
        },
        {
          "_id": "648e920abe75012df0380d06",
          "user": "648dc4a6565f08aa90a1d821",
          "title": "My first note updated",
          "description": "This is my first note in the DB is updated",
          "tag": "General",
          "date": "2023-06-18T05:11:38.531Z",
          "__v": 0
        },
        {
          "_id": "648ec912aa6b8cd3d0d2b397",
          "user": "648dc4a6565f08aa90a1d821",
          "title": "My second note",
          "description": "This is my second note in the DB",
          "tag": "General",
          "date": "2023-06-18T09:06:26.831Z",
          "__v": 0
        },
        {
          "_id": "648e920abe75012df0380d06",
          "user": "648dc4a6565f08aa90a1d821",
          "title": "My first note updated",
          "description": "This is my first note in the DB is updated",
          "tag": "General",
          "date": "2023-06-18T05:11:38.531Z",
          "__v": 0
        },
        {
          "_id": "648ec912aa6b8cd3d0d2b397",
          "user": "648dc4a6565f08aa90a1d821",
          "title": "My second note",
          "description": "This is my second note in the DB",
          "tag": "General",
          "date": "2023-06-18T09:06:26.831Z",
          "__v": 0
        }                
      ];
      const [notes, setNotes] = useState(notesInitial);
      //Add a note
      const addNote = (title, description, tag)=>{
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
      const editNote = ()=>{

      }
    return (
        <NotesContext.Provider value = {{notes, addNote, deleteNote, editNote}}>
            {props.children}
        </NotesContext.Provider>
    );
}

export default NotesState;