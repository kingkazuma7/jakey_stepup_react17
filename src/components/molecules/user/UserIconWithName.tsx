import styled from 'styled-components';
interface UserIconWithNameProps {
  image: string;
  name: string;
  age: number;
}

export const UserIconWithName = (props: UserIconWithNameProps) => {
  const { image, name, age } = props;

  return (
    <>
      <SContainer>
        <SImg src={image} width={160} height={160} alt={name} />
        <SName>{name}</SName>
        <SAge>{age}歳</SAge>
      </SContainer>
    </>
  );
};

const SContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const SImg = styled.img`
  border-radius: 50%;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;
const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;
const SAge = styled.span`
  font-size: 14px;
`;
