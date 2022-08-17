import React, { FC } from 'react';
import { Title } from 'src/components/partials/title';

type Props = {
  title: string;
  children: React.ReactNode;
};

const BlockWithTitle: FC<Props> = ({ title, children }) => {
  return (
    <>
      <Title text={title} />
      <div className="mt-24px">{children}</div>
    </>
  );
};

export default BlockWithTitle;
