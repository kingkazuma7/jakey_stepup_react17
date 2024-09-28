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
  border: solid 2px #329eff;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
