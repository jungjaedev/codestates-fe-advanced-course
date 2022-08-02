import axios from 'axios';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
  const [posts, setPosts] = useState();
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
      setPosts(res.data);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <div className="App">
      {posts.map((el, idx) => {
        console.log(el);
        return (
          <List key={idx}>
            <div>{el.title}</div>
            <div>작성자 {el.userId}</div>
          </List>
        );
      })}
    </div>
  );
}

export default App;

const List = styled.div`
  display: flex;
  flex-direction: row;
`;
