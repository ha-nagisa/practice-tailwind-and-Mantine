import IconFacebook from '@/assets/icon/icon_facebook.svg';
import IconRss from '@/assets/icon/icon_rss.svg';
import IconTwitter from '@/assets/icon/icon_twitter.svg';
import React, { FC } from 'react';
import { Container } from '../../../partials/container';

export const MainContent: FC = () => {
  return (
    <div className="bg-primary-pink pt-53.5px pb-63.5px md:py-85.5px">
      <Container>
        <div className="block md:flex md:items-center md:justify-between">
          <div className="mb-30px md:mb-0">
            <h1 className="text-primary-white text-xl md:text-3xl font-bold leading-9 mb-4px">
              Shimabu IT University
            </h1>
            <p className="text-primary-white text-base font-bold leading-6">
              しまぶーのポートフォリオのためのページです
            </p>
          </div>
          <ul className="flex items-center">
            <li className="mr-8px">
              <a href="/">
                <IconTwitter />
              </a>
            </li>
            <li className="mr-8px">
              <a href="/">
                <IconFacebook />
              </a>
            </li>
            <li>
              <a href="/">
                <IconRss />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};
