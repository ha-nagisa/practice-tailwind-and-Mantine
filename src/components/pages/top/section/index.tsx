import React, { FC } from 'react';

type Props = {
  children: React.ReactNode;
};

const TopSection: FC<Props> = ({ children }) => {
  return <section className="mt-61px md:mt-101px">{children}</section>;
};

export default TopSection;
