import { NextPage } from 'next';
import React from 'react';
import DefaultLayout from 'src/components/layout';
import BlockWithTitle from 'src/components/partials/block-with-title/indext';
import { Container } from 'src/components/partials/container';
import SectionBlock from 'src/components/partials/section-block';
import TextWithCaptionCardList from 'src/components/partials/text-with-caption-card-list';

const portfolioMock = [
  {
    id: 1,
    title: 'IT KINGDOM',
    imageUrl: 'https://placehold.jp/3d4070/ffffff/315x184.png?text=dummy',
    caption: 'IT KINGDOM',
    description:
      '当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。',
    startDate: '2021.10',
    endDate: '2021.12',
  },
  {
    id: 2,
    title: 'IT KINGDOM',
    imageUrl: 'https://placehold.jp/3d4070/ffffff/315x184.png?text=dummy',
    caption: 'IT KINGDOM',
    description:
      '当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。',
    startDate: '2021.10',
    endDate: '2021.12',
  },
  {
    id: 3,
    title: 'IT KINGDOM',
    imageUrl: 'https://placehold.jp/3d4070/ffffff/315x184.png?text=dummy',
    caption: 'IT KINGDOM',
    description:
      '当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。',
    startDate: '2021.10',
    endDate: '2021.12',
  },
  {
    id: 4,
    title: 'IT KINGDOM',
    imageUrl: 'https://placehold.jp/3d4070/ffffff/315x184.png?text=dummy',
    caption: 'IT KINGDOM',
    description:
      '当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。',
    startDate: '2021.10',
    endDate: '2021.12',
  },
  {
    id: 5,
    title: 'IT KINGDOM',
    imageUrl: 'https://placehold.jp/3d4070/ffffff/315x184.png?text=dummy',
    caption: 'IT KINGDOM',
    description:
      '当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。',
    startDate: '2021.10',
    endDate: '2021.12',
  },
  {
    id: 6,
    title: 'IT KINGDOM',
    imageUrl: 'https://placehold.jp/3d4070/ffffff/315x184.png?text=dummy',
    caption: 'IT KINGDOM',
    description:
      '当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。',
    startDate: '2021.10',
    endDate: '2021.12',
  },
];

const PortfolioPage: NextPage = () => {
  return (
    <DefaultLayout>
      <SectionBlock>
        <Container>
          <BlockWithTitle title="Portfolio">
            <TextWithCaptionCardList cardList={portfolioMock} />
          </BlockWithTitle>
        </Container>
      </SectionBlock>
    </DefaultLayout>
  );
};

export default PortfolioPage;
