import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Posts from './pages/Posts';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/posts">posts</Link>
            </li>
          </ul>
        </nav>
        <Pages>
          <Routes>
            <Route path="/posts" element={<Posts />} />
          </Routes>
        </Pages>
      </div>
    </Router>
  );
}

const Pages = styled.div`
  padding: 40px;
`;

export default App;
