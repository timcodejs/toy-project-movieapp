import './App.css';
import Home from './pages/home';
import Movies from './pages/movies';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Movies" element={<Movies />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  body {
      margin: 0;
      padding: 0;
      font-family: sans-serif;
      -ms-overflow-style: none;
  }
  a {
    color: #000;
    text-decoration: none;
  }
  button {
    border: 0;
    background: none;
    cursor: pointer;
  }
  p {
    font-size: 14px;
  }
`;
