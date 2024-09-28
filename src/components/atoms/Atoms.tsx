import { PrimaryButton } from './button/PrimaryButton';
import { SecondaryButton } from './button/SecondaryButton';
import { SearchInput } from '../molecules/SearchInput';
import { UserCard } from '../organism/user/UserCard';

export const Atoms = () => {
  return (
    <>
      <h1>atomsのHomeページです</h1>
      <PrimaryButton>プライマリー</PrimaryButton>
      <SecondaryButton>セカンダリー</SecondaryButton>
      <br />
      <UserCard />
    </>
  );
};
