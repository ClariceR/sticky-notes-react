import { Component } from "react";
import "./App.css";
import Header from "./Header";
import NotesList from "./NotesList";

class App extends Component {
  state = {
    searchText: "",
    notes: [
      {
        id: Date.now(),
        title: "",
        description: "",
        doesMatchSearch: true,
      },
    ],
  };

  addNote = () => {
    const newNote = {
      id: Date.now(),
      title: "",
      description: "",
      doesMatchSearch: true,
    };
    const newNotes = [...this.state.notes, newNote];
    this.setState({ notes: newNotes });
  };

  onType = (updatedNoteId, updatedField, updatedValue) => {
    const noteToUpdate = (note) => {
      if (note.id !== updatedNoteId) {
        return note;
      } else {
        if (updatedField === 'title') {
          note.title = updatedValue;
          return note;
        } else {
          note.description = updatedValue;
          return note;
        }
      }
    }
    const updatedNotes = this.state.notes.map(noteToUpdate);
    this.setState({notes: updatedNotes})
  }

  render() {
    return (
      <>
        <div className="container flex flex--column">
          <Header searchText={this.state.searchText} addNote={this.addNote} />
          <NotesList notes={this.state.notes} onType={this.onType}/>
        </div>
      </>
    );
  }
}

export default App;
