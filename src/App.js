import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';

function App() {
  const [search, setSearch] = useState();
  const onClick = (searchTerm) => {
    setSearch(searchTerm);
  };

  return (
    <div className="App">
      <Header onClick={onClick} />
      <Outlet />
    </div>
  );
}

export default App;
