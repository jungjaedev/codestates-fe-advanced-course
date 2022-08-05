import React from 'react';
import axios from 'axios';

import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Detail() {
  const location = useLocation();
  const { state } = location;
  const [comment, setComment] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments/?postId=${state.data.id}`)
      .then(res => {
        setComment(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>작성자 {state.data.userId}</div>
      <div>{state.data.title}</div>
      <div>{state.data.body}</div>
      <div>{comment.length}</div>
    </div>
  );
}

export default Detail;
