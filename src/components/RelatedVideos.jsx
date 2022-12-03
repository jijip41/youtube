import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import VideoCard from './VideoCard';

export default function RelatedVideos({ id }) {
  const { youtube } = useYoutubeApi();

  const { data: videos } = useQuery(
    ['related', id],
    () => youtube.searchRelatedVideoListByVideoId(id),
    { staleTime: 1000 * 60 * 10 }
  );

  return (
    <>
      {videos && (
        <ul className="flex flex-col gap-4">
          {videos.map((video) => (
            <VideoCard video={video} key={video.id} type="list" />
          ))}
        </ul>
      )}
    </>
  );
}
