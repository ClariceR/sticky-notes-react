import React from 'react'

function Note(props) {
    return (
      <li className="note effect2">
        <input className="note__title" type="text" placeholder="Title" value={props.title}/>
        <textarea className="note__description" placeholder="Description..." value={props.description}/>
        <span className="note__delete">x</span>
      </li>
    );
}

export default Note
