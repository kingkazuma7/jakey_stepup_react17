import { BrowserRouter, Link } from 'react-router-dom';
import { Router } from './components/router/Router';
import './style.css';
import { Router2 } from './components/router/Router2';

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
        <br />
        <Link to="/atoms">Atoms</Link>
        <br />
        {/* <Router /> */}
        <Router2 />
      </div>
    </BrowserRouter>
  );
}
