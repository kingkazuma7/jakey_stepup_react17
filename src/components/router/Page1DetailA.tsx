import { useLocation } from 'react-router-dom';

export const Page1DetailA = () => {
  const { state, key } = useLocation();
  console.log(state, key);
  return <div>Page1DetailAのページです。</div>;
};
