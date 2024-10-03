import axios from 'axios';

export const FetchData = () => {
  interface ApiResponse {}

  const onClickFetchData = (): void => {
    axios
      .get<ApiResponse>('https://jsonplaceholder.typicode.com/todos')
      .then(res => console.log(res));
  };
  return (
    <>
      <h1>FetchData</h1>
      <button onClick={onClickFetchData}>データ取得</button>
    </>
  );
};
