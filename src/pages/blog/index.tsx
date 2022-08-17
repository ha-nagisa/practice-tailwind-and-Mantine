import { NextPage } from 'next';
import React from 'react';
import DefaultLayout from 'src/components/layout';
import BlockWithTitle from 'src/components/partials/block-with-title/indext';
import { Container } from 'src/components/partials/container';
import SectionBlock from 'src/components/partials/section-block';
import { TextCardList } from 'src/components/partials/text-card-list';

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

const BlogPage: NextPage = () => {
  return (
    <DefaultLayout>
      <SectionBlock>
        <Container>
          <BlockWithTitle title="Blog">
            <TextCardList textList={blogMock} />
          </BlockWithTitle>
        </Container>
      </SectionBlock>
    </DefaultLayout>
  );
};

export default BlogPage;
