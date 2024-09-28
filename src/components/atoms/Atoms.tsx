import { PrimaryButton } from './button/PrimaryButton';
import { SecondaryButton } from './button/SecondaryButton';
import { SearchInput } from '../molecules/SearchInput';

export const Atoms = () => {
  return (
    <>
      <h1>atomsのHomeページです</h1>
      <PrimaryButton>プライマリー</PrimaryButton>
      <SecondaryButton>セカンダリー</SecondaryButton>
      <br />
      <SearchInput />
    </>
  );
};
