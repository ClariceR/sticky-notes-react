import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="header__container">
          <header className="app-header__title flex">
            <h1 className="logo">
              Super
              <br />
              Sticky
              <br />
              Notes
            </h1>
            <aside className="app-header__controls">
              <button className="add-new">+ New Note</button>
              <input
                className="search"
                type="text"
                placeholder="Type here to search..."
              />
            </aside>
          </header>
        </div>

        <ul>
          <li>
            <input type="text" placeholder="Title" />
            <textarea placeholder="Description..." />
            <span>X</span>
          </li>
          <li>
            <input type="text" placeholder="Title" />
            <textarea placeholder="Description..." />
            <span>X</span>
          </li>
          <li>
            <input type="text" placeholder="Title" />
            <textarea placeholder="Description..." />
            <span>X</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
