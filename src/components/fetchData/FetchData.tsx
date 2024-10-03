import axios from 'axios';
import { useState } from 'react';
import { Todo } from './Todo';

export const FetchData = () => {
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  type TodoType = {
    userId: string;
    id: number;
    title: string;
    completed: boolean;
  };

  const onClickFetchData = (): void => {
    axios
      .get<Array<TodoType>>('https://jsonplaceholder.typicode.com/todos')
      .then(res => {
        setTodos(res.data);
      });
  };

  return (
    <>
      <h1>FetchData</h1>
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo: TodoType) => (
        <Todo
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </>
  );
};
