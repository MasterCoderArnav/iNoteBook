import React from "react";
import NotesComp from "./NotesComp";
import AddNote from "./AddNote";

const Home = (props) => {
  return (
    <div className="container mu-3">
      <AddNote showAlert={props.showAlert}/>
      <div className="row">
        <h2>Your Notes</h2>
        <NotesComp showAlert={props.showAlert}/>
      </div>
    </div>
  );
};

export default Home;
