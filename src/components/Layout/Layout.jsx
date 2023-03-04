import { Container } from './Layout.style';

export const Layout = ({ children }) => {
    return (
      <Container>
        <main>{children}</main>
      </Container>
    );
  };