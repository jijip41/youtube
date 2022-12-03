import React from 'react';
import { formatDistance } from 'date-fns';
import { useNavigate } from 'react-router-dom';

export default function VideoCard({ video }) {
  const navigate = useNavigate();
  return (
    <li
      className="flex flex-col justify-evenly  rounded-md overflow-hidden bg-zinc-800 hover:bg-zinc-700 hover:scale-140 p-2 hover:scale-110 transition duration-250 ease-out hover:ease-in"
      key={video.id}
      onClick={() => {
        navigate(`/videos/watch/${video.id}`, { state: { video } });
      }}
    >
      <img
        src={video.snippet.thumbnails.medium.url}
        alt=""
        className="content-center w-full"
      />
      <p className="font-semibold line-clamp-2">{video.snippet.title}</p>

      <p className="truncate opacity-80 text-xs">
        {video.snippet.channelTitle}
      </p>
      <p className="opacity-80 text-xs">
        {formatDistance(new Date(video.snippet.publishedAt), new Date(), {
          addSuffix: true,
        })}
      </p>
    </li>
  );
}
