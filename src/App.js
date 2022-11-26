import './App.css';
import { MagnifyingGlass } from 'phosphor-react';

function App() {
  return (
    <div className="App">
      <header className="">Youtube</header>
      <input placeholder="Search..."></input>
      <button>
        <MagnifyingGlass title="search-icon" />
      </button>
    </div>
  );
}

export default App;
