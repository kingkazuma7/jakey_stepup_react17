import styled from 'styled-components';

export const Input: React.FC<{ placeholder?: string }> = props => {
  const { placeholder = '' } = props;
  return (
    <>
      <SInput type="text" placeholder={placeholder} />
    </>
  );
};

const SInput = styled.input`
  padding: 8px 16px;
  outline: none;
  width: 50%;
`;
