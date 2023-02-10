import { useRouter } from 'next/router';
import Cart from '@/components/shared/Cart';
import Head from 'next/head';
const GenreSlug = () => {
  const router = useRouter();
  const slugs = router.query;
  const [slug] = slugs.genreSlug;
  return (
    <main>
      <Head>
        <title>quotes | {slug}</title>
      </Head>
      {<Cart slug={slug} />}
    </main>
  );
};

export default GenreSlug;
