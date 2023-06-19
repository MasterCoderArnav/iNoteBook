import React from "react";
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
    const [notes, setNotes] = React.useState(notesInitial);
    return (
        <NotesContext.Provider value = {{notes, setNotes}}>
            {props.children}
        </NotesContext.Provider>
    );
}

export default NotesState;