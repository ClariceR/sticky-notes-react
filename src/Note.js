import React from "react";

function Note(props) {
    const updateTitle = e => {
        const updatedValue = e.target.value;
        const updatedNoteId = props.note.id;
        props.onType(updatedNoteId, 'title', updatedValue);
    };
    const updateDescription = e => {
        const updatedValue = e.target.value;
        const updatedNoteId = props.note.id;
        props.onType(updatedNoteId, 'description', updatedValue);
    }
  return (
    <li className="note effect2">
      <input
        className="note__title"
        type="text"
        placeholder="Title"
        value={props.note.title}
        onChange={updateTitle}
      />
      <textarea
        className="note__description"
        placeholder="Description..."
        value={props.note.description}
        onChange={updateDescription}
      />
      <span className="note__delete">x</span>
    </li>
  );
}

export default Note;
