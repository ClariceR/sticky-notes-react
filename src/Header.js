import React from 'react'

function Header(props) {
    return (
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
              value={props.searchText}
            />
            <button className="add-new effect2" onClick={props.addNote}>+ New Note</button>
          </aside>
        </header>
      </div>
    );
}

export default Header
