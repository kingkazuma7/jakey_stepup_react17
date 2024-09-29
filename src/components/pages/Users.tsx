import styled from 'styled-components';
import { SearchInput } from '../molecules/SearchInput';
import { UserCard } from '../organism/user/UserCard';

const users = [...Array(10).keys()].map(val => {
  return {
    id: val + 1, // Start from 1 instead of 0
    name: `ルフィ ${val + 1}`,
    image:
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-Y7rgTcW5NdDkxvwMW4Gdj2Q3G3lZVBvHHC10A3T_Iwxj0257NbTbdhvWKFOqn7nxXw6-V4P_0VFuJZ_5cQSDPxlazFKTD9N-d1A0IrX0k7LoaVpG3X9IwQ48H0zfXTJOT1JntRr0Lq3o/s1048/onepiece01_luffy.png',
    companyName: '株式会社ほげ',
    email: 'dummy1@example.com',
    website: 'dummy3@example.com',
    age: 18,
  };
});

export const Users = () => {
  return (
    <>
      <h2>Users一覧</h2>
      <SUserWrapper>
        <SearchInput />
        <SUserArea>
          {users.map(user => (
            <UserCard key={user.id} user={user} />
          ))}
        </SUserArea>
      </SUserWrapper>
    </>
  );
};

const SUserWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const SUserArea = styled.div`
  padding: 0 100px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1em;
`;
