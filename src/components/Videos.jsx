import React from 'react';
import { useParams } from 'react-router-dom';

function Videos(props) {
  const { keyword } = useParams();
  console.log({ keyword });
  return <div>Videos : {keyword ? 'keyword videos' : '🔥'}</div>;
}

export default Videos;
