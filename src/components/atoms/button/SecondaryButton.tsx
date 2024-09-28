import styled from 'styled-components';
import { BaseButton } from './BaseButton';

interface SecondaryButtonProps {
  children: React.ReactNode;
}

const StyledButton = styled(BaseButton)`
  background-color: #119992;
`;

export const SecondaryButton = (props: SecondaryButtonProps) => {
  const { children } = props;
  return (
    <>
      <StyledButton>{children}</StyledButton>
    </>
  );
};
