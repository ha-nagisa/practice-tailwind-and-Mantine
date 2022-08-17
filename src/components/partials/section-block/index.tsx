import React, { FC } from 'react';

type Props = {
  children: React.ReactNode;
};

const SectionBlock: FC<Props> = ({ children }) => {
  return <section className="mt-40px">{children}</section>;
};

export default SectionBlock;
