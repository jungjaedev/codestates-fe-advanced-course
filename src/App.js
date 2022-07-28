import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [posts, setPosts] = useState();
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(data => {
      console.log(data);
      setPosts(data.data);
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
        return <div key={idx}>{el.title}</div>;
      })}
    </div>
  );
}

export default App;
