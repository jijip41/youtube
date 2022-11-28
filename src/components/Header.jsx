import { useEffect, useState } from 'react';
import { MagnifyingGlass, YoutubeLogo } from 'phosphor-react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export function Header({ onClick }) {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };

  useEffect(() => setText(keyword || ''), [keyword]);

  return (
    <header className="flex w-full m-4">
      <Link to="/">
        <div className="flex items-center gap-2">
          <YoutubeLogo className=" text-brand text-4xl" />
          <h1 className="text-3xl">Youtube</h1>
        </div>
      </Link>
      <form
        className="w-full flex justify-center gap-x-2 items-center"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Search..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="outline-none bg-black text-gray-50 w-7/12 p-2 "
        ></input>
        <button className="bg-zinc-400 w-8 h-8 flex justify-center items-center hover:bg-zinc-500">
          <MagnifyingGlass title="search-icon" />
        </button>
      </form>
    </header>
  );
}
