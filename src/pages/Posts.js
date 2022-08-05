import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import { useEffect, useState } from 'react';

function Posts() {
  const [posts, setPosts] = useState();
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        setPosts(res.data);
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
      {posts.map((el, idx) => {
        return (
          <List key={idx}>
            <Link to={`/posts/${el.id}`} state={{ data: el }}>
              {el.title}
            </Link>
            <div>작성자 {el.userId}</div>
          </List>
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
