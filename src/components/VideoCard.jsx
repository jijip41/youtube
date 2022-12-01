import React from 'react';
import { formatDistance } from 'date-fns';

export default function VideoCard({ video }) {
  return (
    <div className="">
      <a href={'a'}>
        <img src={video.snippet.thumbnails.medium.url} alt="" />
      </a>
      <p className="truncate">{video.snippet.title}</p>
      <p className="truncate">{video.snippet.channelTitle}</p>
      <p>
        {formatDistance(new Date(video.snippet.publishedAt), new Date(), {
          addSuffix: true,
        })}
      </p>
    </div>
  );
}
