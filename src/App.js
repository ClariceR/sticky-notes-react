import "./App.css";

function App() {
  return (
    <>
      <div className="container flex">
        <div className="header__container">
          <header className="app-header__title">
            <h1 className="logo">
              Super
              <br />
              Sticky
              <br />
              Notes
            </h1>
            <aside className="app-header__controls flex">
              <input
                className="search"
                type="text"
                placeholder="Type here to search..."
              />
              <button className="add-new">+ New Note</button>
            </aside>
          </header>
        </div>

        <ul className="notes__list">
          <li className="note effect2">
            <input className="note__title" type="text" placeholder="Title" />
            <textarea
              className="note__description"
              placeholder="Description..."
            />
            <span className="note__delete">X</span>
          </li>
          <li className="note effect2">
            <input className="note__title" type="text" placeholder="Title" />
            <textarea
              className="note__description"
              placeholder="Description..."
            />
            <span className="note__delete">X</span>
          </li>
          <li className="note effect2">
            <input className="note__title" type="text" placeholder="Title" />
            <textarea
              className="note__description"
              placeholder="Description..."
            />
            <span className="note__delete">X</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
