import { PrimaryButton } from './button/PrimaryButton';
import { SecondaryButton } from './button/SecondaryButton';
import { UserCard } from '../organism/user/UserCard';
import { HeaderOnly } from '../templates/HeaderOnly';
import { BrowserRouter } from 'react-router-dom';
import { DefaultLayout } from '../templates/DefaultLayout';

const user = {
  name: 'ルフィ',
  image:
    'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-Y7rgTcW5NdDkxvwMW4Gdj2Q3G3lZVBvHHC10A3T_Iwxj0257NbTbdhvWKFOqn7nxXw6-V4P_0VFuJZ_5cQSDPxlazFKTD9N-d1A0IrX0k7LoaVpG3X9IwQ48H0zfXTJOT1JntRr0Lq3o/s1048/onepiece01_luffy.png',
  companyName: '株式会社ほげ',
  email: 'dummy1@example.com',
  website: 'dummy3@example.com',
  age: 18,
};

export const Atoms = () => {
  return (
    <>
      <BrowserRouter>
        <DefaultLayout>
          <h1>atomsのHomeページです</h1>
          <PrimaryButton>プライマリー</PrimaryButton>
          <SecondaryButton>セカンダリー</SecondaryButton>
          <br />
          <UserCard user={user} />
        </DefaultLayout>
      </BrowserRouter>
    </>
  );
};
