import { MagnifyingGlass } from 'phosphor-react';
import { useRef } from 'react';

export function Header({ onClick }) {
  const inputRef = useRef();
  return (
    <>
      <header className="">Youtube</header>
      <input placeholder="Search..." ref={inputRef}></input>
      <button onClick={() => onClick(inputRef.current.value)}>
        <MagnifyingGlass title="search-icon" />
      </button>
    </>
  );
}
