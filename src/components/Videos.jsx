import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Videos(props) {
  const { keyword } = useParams();
  const [popList, setPopList] = useState();
  const [searchList, setSearchList] = useState();

  useEffect(() => {
    fetch('./data/pop.json')
      .then((res) => res.json())
      .then((data) => setPopList(data))
      .then(console.log);
  }, []);

  useEffect(() => {
    fetch('./data/search.json')
      .then((res) => res.json())
      .then((data) => setSearchList(data))
      .then(console.log);
  }, [keyword]);

  console.log({ keyword });
  return (
    <div>
      Videos : {keyword ? JSON.stringify(searchList) : JSON.stringify(popList)}
    </div>
  );
}

export default Videos;
