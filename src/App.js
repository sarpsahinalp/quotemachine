import './App.css';
import { useState, useEffect } from 'react';

function App() {

  function getRandomColor() {
    let color = 'rgb(';
    for (let i = 0; i < 3; i++) {
      color += Math.floor(Math.random() * 256);
      if (i < 2) {
        color += ',';
      }
    }
    color += ')';
    return color;
  }

  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    fetch('https://api.quotable.io/random')
      .then(res => res.json())
      .then(data => {
        setQuote(data.content);
        setAuthor(data.author);
      });

      fetch('https://api.quotable.io/random')
      .then(res => res.json())
      .then(data => {
        setQuote(data.content);
        setAuthor(data.author);
      });

    random = getRandomColor();
    quoteStyle = {
      transition: 'color 2s',
      color: random
    }
    authorStyle = {
      transition: 'color 2s',
      color: random
    }
    document.body.style.backgroundColor = random;
    document.getElementById('App').style.backgroundColor = random;
  }, []);


  let buttonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    fontSize: '20px',
    padding: '10px',
    borderRadius: '10px',
    border: 'none',
    cursor: 'pointer'
  }

  let random = getRandomColor();


  let quoteStyle = {
    color: random
  }

  let authorStyle = {
    color: random
  }

  function handleClick() {
    fetch('https://api.quotable.io/random')
      .then(res => res.json())
      .then(data => {
        setQuote(data.content);
        setAuthor(data.author);
      });

    random = getRandomColor();
    quoteStyle = {
      transition: 'color 2s',
      color: random
    }
    authorStyle = {
      transition: 'color 2s',
      color: random
    }
    document.body.style.backgroundColor = random;
    document.getElementById('App').style.backgroundColor = random;
  }

  return (
    <div className="App" id='App'>
      <div id='quote-box'>
        <p id='quote' style={quoteStyle}>{quote}</p>
        <p id='author' style={authorStyle}>{author}</p>
        <button style={buttonStyle} id='new-quote' onClick={handleClick}>New Quote</button>
        <a id='tweet-quote' href='twitter.com/intent/tweet'>Tweet Quote</a>
      </div>
    </div>
  );
}

export default App;
