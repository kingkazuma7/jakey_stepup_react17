import { Link, useHistory } from 'react-router-dom';

export const Page1 = () => {
  const arr: number[] = Array.from(Array(100).keys());
  // console.log(arr);

  const history = useHistory();
  // console.log(history);
  const onCLickDetailB = () => history.push('/page1/detailB');

  return (
    <div>
      <h1>Page1です</h1>
      <Link to={{ pathname: '/page1/detailA', state: arr }}>DetailA</Link>
      <br />
      <Link to="/page1/detailB">DetailB</Link>
      <br />
      <button onClick={onCLickDetailB}>DetailB</button>
    </div>
  );
};
