import styled from 'styled-components';
interface CardProps {
  children: React.ReactNode;
}

export const Card = (props: CardProps) => {
  const { children } = props;

  return (
    <>
      <SCard>{children}</SCard>
    </>
  );
};

const SCard = styled.div`
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;
