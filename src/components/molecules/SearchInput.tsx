import styled from 'styled-components';
import { PrimaryButton } from '../atoms/button/PrimaryButton';
import { Input } from '../atoms/input/Input';

export const SearchInput = () => {
  return (
    <>
      <SContainer>
        <Input placeholder="検索条件をいれる" />
        <PrimaryButton>検索</PrimaryButton>
      </SContainer>
    </>
  );
};

const SContainer = styled.div`
  gap: 1em;
  margin-bottom: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
`;
