import styled from 'styled-components';
import { BaseButton } from './BaseButton';

interface SecondaryButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const StyledButton = styled(BaseButton)`
  background-color: #119992;
`;

export const SecondaryButton = (props: SecondaryButtonProps) => {
  const { children, onClick } = props;

  return (
    <>
      <StyledButton onClick={() => onClick()}>{children}</StyledButton>
    </>
  );
};
