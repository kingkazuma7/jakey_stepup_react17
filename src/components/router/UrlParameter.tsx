import { useParams, useLocation } from 'react-router-dom';

export const UrlParameter = () => {
  const { id } = useParams() as { id: string };
  const { search } = useLocation(); // ?name=tanaka&age=18
  const query = new URLSearchParams(search);

  return (
    <>
      <h1>UrlParameterページです。</h1>
      <p>:idで渡されたurlパラメーターは {id} です</p>
      <p>
        クエリパラメーターは {query.get('name')}と{query.get('age')}歳です。
      </p>
    </>
  );
};
