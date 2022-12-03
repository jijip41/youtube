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
    <section className="grid grid-cols-3">
      <article className="col-span-2">
        <iframe
          id="player"
          type="text/html"
          width="100%"
          height="640"
          src={`https://www.youtube.com/embed/${video.id}`}
          frameBorder="0"
          title={`youtube-${video.id}`}
        ></iframe>
        <div>
          <h2 className="text-lg font-bold">{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
        </div>
        <pre>{description}</pre>
      </article>
      <section>
        <RelatedVideos id={video.id} />s
      </section>
    </section>
  );
}

export default VideoDetail;
