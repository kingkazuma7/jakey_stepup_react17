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

const user: User = {
  // 別ファイルでオブジェクトで型定義しているを呼び出し
  name: 'ゾロ',
  hobbies: ['剣士', '筋トレ'],
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
              <UserCardSample />
            </HeaderOnly>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};
