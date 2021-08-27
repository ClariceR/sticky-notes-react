import "./App.css";

function App() {
  return (
    <>
      <div className="container flex flex--column">
        <div className="header__container">
          <header className="app-header__title grid grid-two">
            <h1 className="logo">
              Super
              <br />
              Sticky
              <br />
              Notes
            </h1>
            <aside className="app-header__controls">
              <input
                className="search"
                type="text"
                placeholder="Type here to search..."
              />
              <button className="add-new effect2">+ New Note</button>
            </aside>
          </header>
        </div>
        <div className="notes__list--wrapper grid">
          <ul className="notes__list">
            <li className="note effect2">
              <input className="note__title" type="text" placeholder="Title" />
              <textarea
                className="note__description"
                placeholder="Description..."
              />
              <span className="note__delete">x</span>
            </li>
            <li className="note effect2">
              <input className="note__title" type="text" placeholder="Title" />
              <textarea
                className="note__description"
                placeholder="Description..."
              />
              <span className="note__delete">x</span>
            </li>
            <li className="note effect2">
              <input className="note__title" type="text" placeholder="Title" />
              <textarea
                className="note__description"
                placeholder="Description..."
              />
              <span className="note__delete">x</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
