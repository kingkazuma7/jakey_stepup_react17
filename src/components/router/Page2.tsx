import { Link } from 'react-router-dom';

export const Page2 = () => {
  return (
    <>
      <h1>Page2です</h1>
      <Link to="/page2/1000">UrlParameter - :idで動的に表示</Link>
    </>
  );
};
