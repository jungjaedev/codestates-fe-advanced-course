import React from 'react';

import axios from 'axios';
import styled from 'styled-components';

import { useEffect, useState } from 'react';

function Posts() {
  const [posts, setPosts] = useState();
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
      setPosts(res.data);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {posts.map((el, idx) => {
        return (
          <>
            <List key={idx}>
              <div>{el.title}</div>
              <div>작성자 {el.userId}</div>
            </List>
          </>
        );
      })}
    </div>
  );
}

export default Posts;

const List = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px gray solid;
  padding: 10px;
`;

const Line = styled.div`
  background: #cecece;
  width: 300px;
  height: 2px;
  padding: 0;
  margin: 0;
`;
