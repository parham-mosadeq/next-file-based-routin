import Cart from '@/components/shared/Cart';
import Head from 'next/head';
const HomePage = () => {
  return (
    <div>
      <Head>
        <title>quotes | Home</title>
      </Head>
      <article>
        <Cart />
      </article>
    </div>
  );
};

export default HomePage;
