import { VFC } from 'react';

type TodoProps = {
  userId: string;
  title: string;
  completed?: boolean;
};

export const Todo: VFC<TodoProps> = props => {
  const { userId, title, completed = false } = props;
  const completeMark = completed ? '[完]' : '[未]';
  return (
    <>
      <p>{`${completeMark} - ${title} - (${userId})`}</p>
    </>
  );
};
