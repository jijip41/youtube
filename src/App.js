import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';

const queryClient = new QueryClient();

function App() {
  const [search, setSearch] = useState();
  const onClick = (searchTerm) => {
    setSearch(searchTerm);
  };

  return (
    <div className="App">
      <Header onClick={onClick} />
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </div>
  );
}

export default App;
