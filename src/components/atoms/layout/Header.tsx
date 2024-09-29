import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = () => {
  return (
    <>
      <SHeader>
        <SLink to="/">Home</SLink>
        <SLink to="/users">Users</SLink>
      </SHeader>
    </>
  );
};

const SHeader = styled.header`
  padding: 10px;
  border-bottom: solid 1px #ddd;
  background-color: #f5f5f5;
`;

const SLink = styled(Link)`
  margin: 0 8px;
`;
