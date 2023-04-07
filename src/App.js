import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const baseURL = 'https://api.quotable.io/random';

  function copy() {
    navigator.clipboard.writeText(quote);
    alert('Quote copied');
  }

  function getQuote() {
    axios.get(`${baseURL}`).then((response) => {
      var data = response.data;
      setQuote(data.content);
      setAuthor(data.author);
    })
  }
  useEffect(() => getQuote(), [])


  return (
    <>
      <section className='main'>
        <header>
          <div className='head'>
            <h1 className='heading'>Quote App"</h1>
            <button className='heading'>About</button>
          </div>
        </header>
        <hr></hr>
        <section className='container'>
          <h3>Quote</h3>
          <h4 id="Quote">{quote}</h4>
          <h5>Author:- {author} </h5>
          <button className='next' onClick={getQuote}>Next</button>
          <button className='copy' onClick={copy}>Copy</button>
        </section>
        <hr></hr>
        <footer>
          <p>&#169; Quote Web App. All rigths are reserved by Md Zulqarnain</p>
        </footer>
      </section>
    </>
  );
}

export default App;
