
import './App.css';
import Counter from './Counter';
import Batsman from './Batsman';
import Uses from './Uses'
import Friends from './Friends';
import { Suspense } from 'react';


const fetchUses = fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json());
const friendsFetch = async() => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
}

function App() {
  const friendsPromise=friendsFetch();
  function likebtn() {
    alert('Like this video')
  }
  const commentbtn = (value) => {
    alert(`Comment is ${value}`)
  }
  return (
    <>

      <Suspense fallback=
        {<h1>Waiting bro .....</h1>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>

      <h1>Vite + React</h1>
      <Suspense fallback=
        {<h1>Loading ........</h1>}>
        <Uses fetchUses={fetchUses}></Uses>
      </Suspense>
      <Batsman></Batsman>
      <Counter></Counter>
      <button onClick={likebtn}>Like</button>
      <button onClick={() => commentbtn(5)}>Comment</button>
      <button onClick={() => {
        alert('Thanks you for subscribe')
      }
      }>Subscribe</button>


    </>
  )
}

export default App
