import { Footer } from '../atoms/layout/Footer';
import { Header } from '../atoms/layout/Header';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export const DefaultLayout = (props: DefaultLayoutProps) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
