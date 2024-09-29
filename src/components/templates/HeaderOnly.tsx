import { Header } from '../atoms/layout/Header';

interface HeaderOnlyProps {
  children: React.ReactNode;
}

export const HeaderOnly = (props: HeaderOnlyProps) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
};
