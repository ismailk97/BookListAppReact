import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const Title = "Tateism : The 41 Tenets";
const Author = "Andrew Tate"; 
const img = 'https://m.media-amazon.com/images/I/41Q8MEnIB4L._SX326_BO1,204,203,200_.jpg';


const firstBook = {
  author: 'Jordan Moore',
  title: 'Interesting Facts For Curious Minds',
  img: 'https://m.media-amazon.com/images/I/518z5dvykPL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
};

const secondBook = {
  author: 'James Clear',
  title: 'Atomic Habits',
  img: 'https://m.media-amazon.com/images/I/51B7kuFwQFL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
};



const BookList = () => {
  return(
  <section className='booklist'>
  <Book Author={firstBook.author} Title={firstBook.title} img={firstBook.img}/>
  <Book Author={secondBook.author} Title={secondBook.title} img={secondBook.img}/>
  <Book Author={Author} Title={Title} img={img}/>

  </section>
)}



const EventExamples = () => {

  //begge disse funksjonene tar seg av eventer knapper/form etc
  const handleFormInput = (e) =>{

  }

  const handleButtonClick = (e) =>{

  }

  return (
    <section>
      <form>
        <h2>Typical form</h2>
        <input type="text" 
        onChange={handleFormInput}
        name='example'
        style={{ margin: '1rem 0' }} />
      </form>
      <button onClick={handleButtonClick}>Click</button>
    </section>
  );
};


const Book  = (props) => {
  return(
  <article className='book'>
    <EventExamples></EventExamples>
    <img src={props.img} alt={props.Title}></img>
    <h2>{props.Title}</h2>
    <h4>{props.Author}</h4>
  </article>
)
} 







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



