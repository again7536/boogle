import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import boogleImage from './boogle.png';
const google = require('google-search-results');

function SearchItem(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      <h4>{props.url}</h4>
      <p>{props.desc}</p>
    </article>
  );
}

function SearchContainer() {
  const [keyword, setKeyword] = React.useState('');
  const [result, setResult] = React.useState([]);
  
  function searchGoogle() {
    google(keyword, (res)=> {
      let items = [];
      for(const r of res)
        items.push(<SearchItem title={r.title} url={r.url} desc={r.description} ></SearchItem>);
      setResult(items);
    });
  };

  return (
    <div className='search-form'>
      <input id='search-bar' value={keyword} onChange={e => setKeyword(e.target.value)}/>
      <button onClick={searchGoogle} id='search-btn'>Search!</button>
      {result}
    </div>
  );
}

function App() {
  return (
    <>
    <div className="App">
      <header>
        <img src={boogleImage} className='logo'></img>
        <SearchContainer />
      </header>
    </div>
    <div id="result">

    </div>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
