import { useState } from 'react'
import reactLogo from './assets/ethanbotton.png'
import viteLogo from './assets/me.png'
import './App.css'

const games = [
  { id: 1, title: 'Fortnite', theme: 'Battle Royale', onPC: true},
  { id: 2, title: 'Minecraft', theme: 'Sandbox', onPC: true},
  { id: 3, title: 'Super Mario Bros.', theme: 'Platformer', onPC: false},
  { id: 4, title: 'Celeste', theme: 'Platformer', onPC: true},
];

function ZineRack() {
  const pcAvailable = games.map(game =>
    <li
      key={game.id}
      style={{
        color: game.onPC ? 'green' : 'red'
      }}
    >
      {game.title}
    </li>
  );
  const isPlatformer = games.map(game =>
    <li
      key={game.id}
      style={{
        color: game.theme == 'Platformer' ? 'green' : 'red'
      }}
    >
      {game.title}
    </li>
  );
  return (
    <div>
      <h3>Are these video games available on windows PC?</h3>
      <ul>{pcAvailable}</ul>
      <h3>Are these video games platformers?</h3>
      <ul>{isPlatformer}</ul>
    </div>
  )
}

function MagicButtons() {
  return (
    <div>
      <h3>These are magic buttons</h3>
      <button>Magic</button>
      <button>Magic</button>
      <button>Magic</button>
      <button>Magic</button>
    </div>
  );
}

function MoreImages() {
  return(
  <div>
  <a href="https://react.dev" target="_blank">
    <img src={reactLogo} className="logo react" alt="React logo" />
  </a>
  <a href="https://react.dev" target="_blank">
    <img src={viteLogo} className="logo react" alt="React logo" />
  </a>
  <a href="https://react.dev" target="_blank">
    <img src={reactLogo} className="logo react" alt="React logo" />
  </a>
  <a href="https://react.dev" target="_blank">
    <img src={viteLogo} className="logo react" alt="React logo" />
  </a>
  <a href="https://react.dev" target="_blank">
    <img src={reactLogo} className="logo react" alt="React logo" />
  </a>
  <a href="https://react.dev" target="_blank">
    <img src={viteLogo} className="logo react" alt="React logo" />
  </a>
</div>);
}

function SuperCounters(){
  const [superCount, superCountInc] = useState(0)

  return (
  <div>
    <h3>Super Count: {superCount}</h3>
    <button onClick={() => superCountInc((superCount) => superCount + 1)}>
     increase
    </button>
    <button onClick={() => superCountInc((superCount) => superCount - 1)}>
    decrease
    </button>
    <button onClick={() => superCountInc((superCount) => superCount = 0)}>
    zero
    </button>
  </div>
  )
}

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
      <MagicButtons />
      <ZineRack />
      <MoreImages />
      <SuperCounters />
    </>
  )
}

export default App
