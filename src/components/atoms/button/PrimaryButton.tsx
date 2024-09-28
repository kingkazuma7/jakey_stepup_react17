import styled from 'styled-components';
import { BaseButton } from './BaseButton';

interface PrimaryButtonProps {
  children: React.ReactNode;
}

const StyledButton = styled(BaseButton)`
  background-color: #007bff;
`;

export const PrimaryButton = (props: PrimaryButtonProps) => {
  const { children } = props;
  return (
    <>
      <StyledButton>{children}</StyledButton>
    </>
  );
};
