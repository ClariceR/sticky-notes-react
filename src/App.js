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

  deleteNote = (deleteNoteId) => {
    const updatedNotes = this.state.notes.filter(
      (note) => note.id !== deleteNoteId
    );
    this.setState({ notes: updatedNotes });
  };

  onType = (updatedNoteId, updatedField, updatedValue) => {
    const noteToUpdate = (note) => {
      if (note.id !== updatedNoteId) {
        return note;
      } else {
        if (updatedField === "title") {
          note.title = updatedValue;
          return note;
        } else {
          note.description = updatedValue;
          return note;
        }
      }
    };
    const updatedNotes = this.state.notes.map(noteToUpdate);
    this.setState({ notes: updatedNotes });
  };

  onSearch = (e) => {
    const searchText = e.target.value.toLowerCase();
    const updatedNotes = this.state.notes.map((note) => {
      if (!searchText) {
        note.doesMatchSearch = true;
        return note;
      } else {
        const isTitleMatch = note.title.toLowerCase().includes(searchText);
        const isDescriptionMatch = note.description
          .toLowerCase()
          .includes(searchText);
        const isMatch = isTitleMatch || isDescriptionMatch;
        note.doesMatchSearch = isMatch;
        return note;
      }
    });
    this.setState({
      searchText: searchText,
      notes: updatedNotes,
    });
  };

  componentDidUpdate() {
    const stringfiedNotes = JSON.stringify(this.state.notes);
    localStorage.setItem("savedNotes", stringfiedNotes);
  }

  componentDidMount() {
    const stringfiedNotes = localStorage.getItem("savedNotes");
    if (stringfiedNotes) {
      const savedNotes = JSON.parse(stringfiedNotes);
      this.setState({ notes: savedNotes });
    }
  }

  render() {
    return (
      <>
        <div className="container flex flex--column">
          <Header
            searchText={this.state.searchText}
            addNote={this.addNote}
            onSearch={this.onSearch}
          />
          <NotesList
            notes={this.state.notes}
            onType={this.onType}
            deleteNote={this.deleteNote}
          />
        </div>
      </>
    );
  }
}

export default App;
