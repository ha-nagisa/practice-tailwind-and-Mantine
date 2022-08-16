import { NextPage } from 'next';
import { Container } from 'src/components/container';
import { Title } from 'src/components/title';

/** トップページ */
const TopPage: NextPage = () => {
  return (
    <div>
      <main>
        <Container>
          <Title text="test" />
        </Container>
      </main>
    </div>
  );
};

export default TopPage;
