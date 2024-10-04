import React, { useContext } from 'react';
import { SecondaryButton } from '../atoms/button/SecondaryButton';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../providers/UserProvider';

export const Top = () => {
  const history = useHistory();
  const { setUserInfo } = useContext(UserContext);
  // console.log(setUserInfo);

  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    history.push('./users');
    // history.push('/users');
    // history.push({ pathname: '/users', state: { isAdmin: true } });
    // history.push({ pathname: '/users', state: { isAdmin: true } });
  };
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    history.push('./users');
    // history.push('/users');
    // history.push({ pathname: '/users', state: { isAdmin: false } });
    // history.push({ pathname: '/users', state: { isAdmin: false } });
  };
  const onClickFetchData = () => {
    history.push('./fetchData');
  };
  const onClickTextData = () => {
    history.push('./sampleText');
  };

  return (
    <>
      <h1>Topです</h1>
      <SecondaryButton children="管理者ユーザー" onClick={onClickAdmin} />
      <br />
      <br />
      <SecondaryButton children="一般ユーザー" onClick={onClickGeneral} />
      <br />
      <br />
      <SecondaryButton children="フェッチデータ" onClick={onClickFetchData} />
      <br />
      <br />
      <SecondaryButton children="テキスト" onClick={onClickTextData} />
    </>
  );
};
