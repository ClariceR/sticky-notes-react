import React from 'react';
import Note from './Note';

function NotesList(props) {
    const searchMatches = props.notes.filter((note) => note.doesMatchSearch)
    const eachNote = props.notes.map((note) => <Note note={note} id={note.id} title={note.title} description={note.description}/>)
    return (
      <div className="notes__list--wrapper grid">
        <ul className="notes__list">
          {eachNote}
        </ul>
      </div>
    );
}

export default NotesList
