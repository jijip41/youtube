import React from 'react';
import { useLocation } from 'react-router-dom';
import ChannelInfo from '../components/ChannelInfo';
import RelatedVideos from '../components/RelatedVideos';

function VideoDetail() {
  const {
    state: { video },
  } = useLocation();
  const { title, channelId, channelTitle, description } = video.snippet;

  return (
    <section className="flex flex-col lg:flex-row space-x-8 justify-center p-4">
      <article className="flex flex-col space-y-4 basis-4/6">
        <iframe
          id="player"
          type="text/html"
          width="100%"
          height="420"
          src={`https://www.youtube.com/embed/${video.id}`}
          frameBorder="0"
          title={`youtube-${video.id}`}
        ></iframe>
        <div className="px-4">
          <h2 className="text-lg font-bold">{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
        </div>
        <pre className="text-sm whitespace-pre-wrap px-4">{description}</pre>
      </article>
      <section className="basis-2/6">
        <RelatedVideos id={video.id} />
      </section>
    </section>
  );
}

export default VideoDetail;
