import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import { Home } from './components/router/Home';
import { Page1 } from './components/router/Page1';
import { Page2 } from './components/router/Page2';
import { Page1DetailA } from './components/router/Page1DetailA';
import { Page1DetaiB } from './components/router/Page1DetaiB';

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route
            path="/page1"
            render={({ match: { url } }) => (
              <Switch>
                {console.log(url)}
                <Route exact path={url}>
                  <Page1 />
                </Route>
                <Route path={`${url}/detailA`}>
                  <Page1DetailA />
                </Route>
                <Route path={`${url}/detailB`}>
                  <Page1DetaiB />
                </Route>
              </Switch>
            )}
          ></Route>
          <Route path="/page2">
            <Page2 />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
