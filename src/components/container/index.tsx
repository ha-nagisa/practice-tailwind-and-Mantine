import React, { FC } from 'react';

type Props = {
  children: React.ReactNode;
};

export const Container: FC<Props> = ({ children }) => {
  return <div className="my-0 mx-auto w-container md:max-w-container">{children}</div>;
};
