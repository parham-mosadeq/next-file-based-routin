import Tags from '@/components/shared/Tags';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { GenreComponent } from '@/styles/styled-components/GenreComponent';
const GenreHomePage = () => {
  const slugs = useRouter();
  const slug = slugs.route;
  return (
    <GenreComponent>
      <Head>
        <title>quotes | Genre</title>
      </Head>
      <div>
        <h1>here is all available genre</h1>
      </div>
      <article>
        <Tags slug={slug} />
      </article>
    </GenreComponent>
  );
};

export default GenreHomePage;
