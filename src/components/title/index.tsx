import React, { FC } from 'react';

type Props = {
  tag?: 'h1' | 'h2';
  text: string;
};

export const Title: FC<Props> = ({ tag: CustomTag = 'h2', text }) => {
  /** TODO: line-heightなどカスタム */
  return (
    <CustomTag className="not-italic leading-6 font-bold text-2xl pb-20px border-b-2 text-primary-dark border-primary-gray">
      {text}
    </CustomTag>
  );
};
