import { Component } from "react";
import "./App.css";
import Header from "./Header";
import NotesList from "./NotesList";

class App extends Component {
  state = {
    searchText: 'searching',
    notes: [
      {
        id: 0,
        title: "eat",
        description: "reese peanut butter cups",
        doesMatchSearch: true,
      },
      {
        id: 1,
        title: "sleep",
        description: "eight hours",
        doesMatchSearch: true,
      },
      {
        id: 2,
        title: "code",
        description: "build an awesome ui",
        doesMatchSearch: true,
      }
    ]
  };

  addNote = () => {
    const newNote = {
      id: Date.now(),
      title: "",
      description: "",
      doesMatchSearch: true,
    };
    const newNotes = [...this.state.notes, newNote];
    this.setState({notes: newNotes})
    
  }
  render() {
    return (
      <>
        <div className="container flex flex--column">
          <Header searchText={this.state.searchText} addNote={this.addNote}/>
          <NotesList notes={this.state.notes}/>
        </div>
      </>
    );
  }
}

export default App;
