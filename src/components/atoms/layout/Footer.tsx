import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Footer = () => {
  return (
    <>
      <SFooter>&copy; 2024 test Inc.</SFooter>
    </>
  );
};

const SFooter = styled.footer`
  padding: 10px;
  border-bottom: solid 1px #ddd;
  background-color: #f5f5f5;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;
