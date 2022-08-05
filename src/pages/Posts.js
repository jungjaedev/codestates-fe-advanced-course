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
    <StyledDiv>
      {posts.map((el, idx) => {
        return (
          <List key={idx}>
            <StyledLink to={`/posts/${el.id}`} state={{ data: el }}>
              {el.title}
            </StyledLink>
            <div>작성자 {el.userId}</div>
          </List>
        );
      })}
    </StyledDiv>
  );
}

export default Posts;

const List = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px #d1c7cd solid;
  padding: 10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const StyledDiv = styled.div`
  border-top: 3px #d1c7cd solid;
  padding-top: 15px;
`;
