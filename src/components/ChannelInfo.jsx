import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function ChannelInfo({ id, name }) {
  const { youtube } = useYoutubeApi();
  const { data: url } = useQuery(
    ['channel', id],
    () => youtube.getChannelImgUrl(id),
    { staleTime: 1000 * 60 * 10 }
  );

  return (
    <div className="flex items-center gap-x-4">
      {url && <img src={url} alt={name} className="w-10 h-10 rounded-full" />}
      <p className="font-semibold">{name}</p>
    </div>
  );
}
