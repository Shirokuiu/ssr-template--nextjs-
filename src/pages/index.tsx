import Head from 'next/head';

import Test from '@containers/test';

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
