import React from 'react';
import { formatDistance } from 'date-fns';
import { useNavigate } from 'react-router-dom';

export default function VideoCard({ video, type }) {
  const navigate = useNavigate();
  const isList = type === 'list';
  return (
    <li
      className={`flex ${
        isList ? 'flex-row' : 'flex-col'
      } rounded-md overflow-hidden bg-zinc-800 hover:bg-zinc-700 hover:scale-140 p-2 hover:scale-110 transition duration-250 ease-out hover:ease-in gap-4`}
      key={video.id}
      onClick={() => {
        navigate(`/videos/watch/${video.id}`, { state: { video } });
      }}
    >
      <img
        src={video.snippet.thumbnails.medium.url}
        alt=""
        className={`content-center ${isList ? 'w-1/3' : 'w-full'} `}
      />
      <div className="flex flex-col space-y-2">
        <p className="font-semibold line-clamp-2">{video.snippet.title}</p>

        <p className="truncate opacity-80 text-xs">
          {video.snippet.channelTitle}
        </p>
        <p className="opacity-80 text-xs">
          {formatDistance(new Date(video.snippet.publishedAt), new Date(), {
            addSuffix: true,
          })}
        </p>
      </div>
    </li>
  );
}
