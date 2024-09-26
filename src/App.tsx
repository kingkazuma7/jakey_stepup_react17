import { BrowserRouter, Link } from 'react-router-dom';
import { Home } from './components/router/Home';
import { Page1 } from './components/router/Page1';
import { Page2 } from './components/router/Page2';

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <Home />
        <Page1 />
        <Page2 />
      </div>
    </BrowserRouter>
  );
}