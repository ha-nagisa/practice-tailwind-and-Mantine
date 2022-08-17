import { NextPage } from 'next';
import Link from 'next/link';
import { MainContent } from 'src/components/pages/top/main-content';
import TopSection from 'src/components/pages/top/section';
import BlockWithTitle from 'src/components/partials/block-with-title/indext';
import { Container } from 'src/components/partials/container';
import { Header } from 'src/components/partials/header';
import { TextCardList } from 'src/components/partials/text-card-list';
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

/** トップページ */
const TopPage: NextPage = () => {
  return (
    <div>
      <main>
        <Container>
          <Header />
        </Container>
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
      </main>
    </div>
  );
};

export default TopPage;
