import { NextPage } from 'next';
import React from 'react';
import DefaultLayout from 'src/components/layout';
import BlockWithTitle from 'src/components/partials/block-with-title/indext';
import { Container } from 'src/components/partials/container';
import SectionBlock from 'src/components/partials/section-block';

const AboutPage: NextPage = () => {
  return (
    <DefaultLayout>
      <main>
        <SectionBlock>
          <Container>
            <BlockWithTitle title="About">
              <h3 className="mb-8px text-22px font-bold leading-8">Lightsound Shimabu</h3>
              <p className="mb-8px">
                ITエンジニアYouTuber。神戸大学経営学部卒。未経験から独学でプログラミングを勉強し、新卒でヤフーに入社。2019年に株式会社GameHintを創業。
              </p>
            </BlockWithTitle>
          </Container>
        </SectionBlock>
      </main>
    </DefaultLayout>
  );
};

export default AboutPage;
