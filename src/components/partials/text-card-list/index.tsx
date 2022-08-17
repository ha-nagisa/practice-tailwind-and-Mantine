import React, { FC } from 'react';

type TextCard = {
  id: number;
  title: string;
  description: string;
  date: string;
};
type Props = {
  textList: TextCard[];
  titleTag?: 'h2' | 'h3';
};

export const TextCardList: FC<Props> = ({ textList, titleTag: CustomTag = 'h3' }) => {
  return (
    <ul>
      {textList.map(({ id, title, description, date }) => (
        <li key={id} className="mb-24px last-of-type:mb-0">
          <CustomTag className="mb-8px text-22px font-bold leading-8">{title}</CustomTag>
          <p className="mb-8px">{description}</p>
          <p className="text-primary-gray-light text-sm">{date}</p>
        </li>
      ))}
    </ul>
  );
};
