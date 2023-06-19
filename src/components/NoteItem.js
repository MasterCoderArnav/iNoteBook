import React from "react";

const NoteItem = (props) => {
  const { note } = props;
  return (
    <div className="col-md-3">
      <div class="card my-2" style={{border: 2+"px solid black"}}>
        <div class="card-body">
          <h5 class="card-title">{note.title}</h5>
          <p class="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
