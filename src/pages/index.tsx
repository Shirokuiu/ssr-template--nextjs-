import Test from '../components/test';
import Head from 'next/head';

function Home() {
  return (
    <div>
      <Head>
        <title>Next App</title>
      </Head>
      <Test />
    </div>
  );
}

export default Home;
