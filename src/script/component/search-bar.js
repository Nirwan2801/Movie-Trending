class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector('#searchElement').value;
  }

  render() {
    this.innerHTML = `
        <style>
        .search-container {
            max-width: 800px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            padding: 10px;
            border-radius: 10px;
            display: flex;
            position: sticky;
            top: 10px;
            background-color: white;
            z-index:99;
            margin: 30px 5px;
          }
          
          .search-container > input {
            width: 75%;
            padding: 16px;
            border: 0;
            border-bottom: 1px solid rgb(46, 79, 79);
            font-weight: bold;
          }
          
          .search-container > input:focus {
            outline: 0;
            border-bottom: 2px solid rgb(46, 79, 79);
          }
          
          .search-container > input:focus::placeholder {
            font-weight: bold;
          }
          
          .search-container > input::placeholder {
            color: rgb(46, 79, 79);
            font-weight: normal;
          }
          
          .search-container > button {
            width: 23%;
            cursor: pointer;
            margin-left: auto;
            padding: 16px;
            background-color: rgb(46, 79, 79);
            color: white;
            border: 0;
            text-transform: uppercase;
            border-radius: 10px;
          }
          
          @media screen and (max-width: 550px) {
            .search-container {
              flex-direction: column;
              position: static;
            }
          
            .search-container > input {
              width: 100%;
              margin-bottom: 12px;
            }
          
            .search-container > button {
              width: 100%;
            }
          }
          
        </style>

        <div id="search-container" class="search-container">
        <input placeholder="Search Movie..." id="searchElement" type="search" />
        <button id="searchButtonElement" type="submit">Search</button>
      </div>
      `;

    this.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
  }
}

customElements.define('search-bar', SearchBar);