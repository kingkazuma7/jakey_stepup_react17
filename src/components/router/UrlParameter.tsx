import { useParams } from 'react-router-dom';

export const UrlParameter = () => {
  const { id } = useParams() as { id: string };
  return (
    <>
      <h1>UrlParameterページです。</h1>
      <p>:idで渡されたurlパラメーターは {id} です</p>
    </>
  );
};
