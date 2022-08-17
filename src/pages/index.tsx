import { NextPage } from 'next';
import Link from 'next/link';
import DefaultLayout from 'src/components/layout';
import { MainContent } from 'src/components/pages/top/main-content';
import TopSection from 'src/components/pages/top/section';
import BlockWithTitle from 'src/components/partials/block-with-title/indext';
import { Container } from 'src/components/partials/container';
import { TextCardList } from 'src/components/partials/text-card-list';
import TextWithCaptionCardList from 'src/components/partials/text-with-caption-card-list';
import { PAGE_URL } from 'src/constants/page-url';

const blogMock = [
  {
    id: 1,
    title: 'This is a header',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    date: '2022.07.11',
  },
  {
    id: 2,
    title: 'This is a header',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    date: '2022.07.11',
  },
  {
    id: 3,
    title: 'This is a header',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    date: '2022.07.11',
  },
  {
    id: 4,
    title: 'This is a header',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    date: '2022.07.11',
  },
  {
    id: 5,
    title: 'This is a header',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    date: '2022.07.11',
  },
];

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

/** トップページ */
const TopPage: NextPage = () => {
  return (
    <DefaultLayout>
      <MainContent />
      <TopSection>
        <Container>
          <BlockWithTitle title="Blog">
            <TextCardList textList={blogMock} />
            <div className="mt-24px text-center">
              <Link href={PAGE_URL.BLOG}>
                <a className="inline-block py-10px px-22px bg-primary-dark text-primary-white text-base rounded-32px">
                  View All
                </a>
              </Link>
            </div>
          </BlockWithTitle>
        </Container>
      </TopSection>
      <TopSection>
        <Container>
          <BlockWithTitle title="portfolio">
            <TextWithCaptionCardList cardList={portfolioMock} />
            <div className="mt-40px text-center">
              <Link href={PAGE_URL.PORTFOLIO}>
                <a className="inline-block py-10px px-22px bg-primary-dark text-primary-white text-base rounded-32px">
                  View All
                </a>
              </Link>
            </div>
          </BlockWithTitle>
        </Container>
      </TopSection>
    </DefaultLayout>
  );
};

export default TopPage;
