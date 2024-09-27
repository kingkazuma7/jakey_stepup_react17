import { Link } from 'react-router-dom';

export const Page404 = () => {
  return (
    <>
      <h1>404 - ページが見つかりません</h1>
      <Link to="/">戻る</Link>
    </>
  );
};
