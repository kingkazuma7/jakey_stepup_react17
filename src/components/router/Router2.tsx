import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Top } from '../pages/Top';
import { Users } from '../pages/Users';
import { DefaultLayout } from '../templates/DefaultLayout';
import { HeaderOnly } from '../templates/HeaderOnly';
import { FetchData } from '../sample/fetchData/FetchData';

export const Router2 = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <DefaultLayout>
              <Top />
            </DefaultLayout>
          </Route>
          <Route path="/users">
            <HeaderOnly>
              <Users />
            </HeaderOnly>
          </Route>
          <Route path="/fetchData">
            <HeaderOnly>
              <FetchData />
            </HeaderOnly>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};
