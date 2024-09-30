import React from 'react';
import { SecondaryButton } from '../atoms/button/SecondaryButton';
import { useHistory } from 'react-router-dom';

export const Top = () => {
  const history = useHistory();
  // console.log(history);

  const onClickAdmin = () =>
    history.push({ pathname: '/users', state: { isAdmin: true } });
  const onClickGeneral = () =>
    history.push({ pathname: '/users', state: { isAdmin: false } });

  return (
    <>
      <h1>Topです</h1>
      <SecondaryButton children="管理者ユーザー" onClick={onClickAdmin} />
      <br />
      <br />
      <SecondaryButton children="一般ユーザー" onClick={onClickGeneral} />
    </>
  );
};
