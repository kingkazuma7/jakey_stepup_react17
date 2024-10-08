import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Top } from '../pages/Top';
import { Users } from '../pages/Users';
import { DefaultLayout } from '../templates/DefaultLayout';
import { HeaderOnly } from '../templates/HeaderOnly';
import { FetchData } from '../sample/fetchData/FetchData';
import { Text } from '../sample/Text/Text';
import { UserProfile } from '../sample/UserProfile/UserProfile';
import { User } from '../sample/types/user';
import { UserCard } from '../organism/user/UserCard';
import { UserCardSample } from '../sample/UserCardSample/UserCardSample';
import { userProfileSample } from '../sample/types/userProfileSample';
import { ChakuraApp } from '../sample/ChakuraApp/ChakuraApp'; // Assuming this exists

const user: User = {
  name: 'ゾロ',
  hobbies: ['剣士', '筋トレ'],
};

const user2 = {
  id: 1,
  name: 'ゾロ',
  email: 'zoro@test.com',
  address: 'ADDRESS',
};

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
          <Route path="/sampleText">
            <HeaderOnly>
              <Text color="red" fontSize="2rem" />
            </HeaderOnly>
          </Route>
          <Route path="/userProfile">
            <HeaderOnly>
              <UserProfile user={user} />
            </HeaderOnly>
          </Route>
          <Route path="/userCardSample">
            <HeaderOnly>
              <UserCardSample user2={user2} />{' '}
            </HeaderOnly>
          </Route>
          <Route path="/ChakuraApp">
            <HeaderOnly>
              <ChakuraApp />
            </HeaderOnly>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};
