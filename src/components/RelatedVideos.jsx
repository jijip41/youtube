import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import VideoCard from './VideoCard';

export default function RelatedVideos({ id }) {
  const { youtube } = useYoutubeApi();

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['related', id], () => {
    return youtube.searchRelatedVideoListByVideoId(id);
  });

  console.log(videos);

  return (
    <div>
      <p>related</p>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong...</p>}
      {videos && (
        <ul className="">
          {videos.map((video) => (
            <VideoCard video={video} key={video.id} />
          ))}
        </ul>
      )}
    </div>
  );
}
