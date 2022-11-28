import { MagnifyingGlass } from 'phosphor-react';

export function Header() {
  return (
    <>
      {' '}
      <header className="">Youtube</header>
      <input placeholder="Search..."></input>
      <button>
        <MagnifyingGlass title="search-icon" />
      </button>
    </>
  );
}
