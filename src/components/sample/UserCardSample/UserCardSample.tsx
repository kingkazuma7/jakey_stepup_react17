import { useState, VFC } from 'react';
import { userProfileSample } from '../types/userProfileSample';
import axios from 'axios';
import { sampleUser } from '../types/api/userSample';

type UserCardSampleProps = {
  user2: userProfileSample;
};

export const UserCardSample: VFC<UserCardSampleProps> = props => {
  const { user2 } = props;
  const style = {
    backgroundColor: 'white',
    padding: '8px',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const [userProfiles, setUserProfiles] = useState<Array<userProfileSample>>(
    []
  );

  const onClickFetchUser = () => {
    axios
      .get<Array<sampleUser>>('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        const data = res.data.map(user => ({
          id: user.id,
          name: `${user.name}(${user.username})`,
          email: user.email,
          address: `${user.address.street}, ${user.address.suite}, ${user.address.city}`,
        }));
        setUserProfiles(data);
      });
  };

  return (
    <>
      <h1>UserCardSample</h1>
      <button onClick={onClickFetchUser}>データ取得</button>
      {userProfiles.map(user => (
        <UserCardSample key={user.id} user2={user} />
      ))}
      {/* <div style={style}>
        <dl>
          <dt>名前</dt>
          <dd></dd>
          <dt>メール</dt>
          <dd></dd>
          <dt>住所</dt>
          <dd></dd>
        </dl>
      </div> */}
    </>
  );
};
