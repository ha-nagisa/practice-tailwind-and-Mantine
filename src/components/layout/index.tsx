import React, { FC, ReactNode } from 'react';
import { Container } from '../partials/container';
import { Header } from '../partials/header';

type Props = {
  children: ReactNode;
};

const DefaultLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Container>
        <Header />
      </Container>
      {children}
    </>
  );
};

export default DefaultLayout;
