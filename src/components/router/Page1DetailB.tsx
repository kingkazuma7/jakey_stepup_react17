import { useHistory } from 'react-router-dom';

export const Page1DetailB = () => {
  const history = useHistory();
  const onClickBack = () => history.goBack();

  return (
    <>
      <div>Page1DetailBのページです。</div>
      <button onClick={onClickBack}>戻る</button>
    </>
  );
};
