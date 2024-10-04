import { VFC } from 'react';
import { User } from '../types/user';

type UserProfileProps = {
  user: User; // exportで定義した型定義
};

export const UserProfile: VFC<UserProfileProps> = props => {
  const { user } = props;
  // console.log(user);

  return (
    <>
      <dl>
        <dt>名前</dt>
        <dd>{user.name}</dd>
        <dt>趣味</dt>
        <dd>{user.hobbies?.join(' / ')}</dd>
      </dl>
    </>
  );
};
