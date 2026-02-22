
import './App.css'

function App() {
 
  function likebtn()
  {
    alert('Like this video')
  }
  const commentbtn=(value)=>{
     alert(`Comment is ${value}`)
  }
  return (
    <>
     
      <h1>Vite + React</h1>
      <button onClick={likebtn}>Like</button>
      <button onClick={()=>commentbtn(5)}>Comment</button>
      <button onClick={()=>
        {
          alert('Thanks you for subscribe')
        }
      }>Subscribe</button>
    
   
    </>
  )
}

export default App
