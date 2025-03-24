import { useState } from 'react'
import reactLogo from './assets/ethanbotton.png'
import viteLogo from '/assets/me.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Luke + Ethan
        (My roommate, he said it's cool if I use the picture)</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count - 1)}>
          count, but actually it's negative {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Luke and Ethan faces to learn more
      </p>
    </>
  )
}

export default App
