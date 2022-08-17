import Image from 'next/image';
import React, { FC } from 'react';

type Card = {
  id: number;
  imageUrl: string;
  caption: string;
  title: string;
  titleTag?: 'h2' | 'h3';
  description: string;
  startDate: string;
  endDate: string;
};

type Props = {
  cardList: Card[];
};

const TextWithCaptionCardList: FC<Props> = ({ cardList }) => {
  return (
    <ul className="block -mb-40px md:flex md:items-start md:flex-wrap">
      {cardList.map(
        ({
          id,
          imageUrl,
          caption,
          title,
          titleTag: CustomTag = 'h3',
          description,
          startDate,
          endDate,
        }) => (
          <li key={id} className="w-full mb-40px md:w-card md:mr-24px md:third:mr-0">
            <div className="mb-16px">
              <Image
                src={imageUrl}
                alt={caption}
                width={315}
                height={184}
                layout="responsive"
                objectFit="cover"
              />
            </div>
            {/** TODO: テキストの文字数が可変な場合に対応 */}
            <CustomTag className="mb-8px text-22px font-bold leading-8">{title}</CustomTag>
            {/** TODO: テキストの文字数が可変な場合に対応 */}
            <p className="mb-8px">{description}</p>
            <p className="text-primary-gray-light text-sm">{`${startDate} - ${endDate}`}</p>
          </li>
        ),
      )}
    </ul>
  );
};

export default TextWithCaptionCardList;
