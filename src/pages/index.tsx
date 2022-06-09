import Head from 'next/head';
import Link from 'next/link';

import { useAppDispatch, useAppSelector } from '@store/index';
import { clearState } from '@store/index-page-process/reducer/index-page-process';
import { getTitle } from '@store/index-page-process/selectors';

import CenterLayout from '@layouts/center-layout/center-layout';
import PageLayout from '@layouts/page-layout/page-layout';

function Home() {
  const title = useAppSelector(getTitle);
  const dispatch = useAppDispatch();

  const handleButtonClick = () => {
    dispatch(clearState());
  };

  return (
    <PageLayout renderFooter={() => <h2>Hello from footer content</h2>}>
      <Head>
        <title>Index page</title>
      </Head>
      <CenterLayout>
        <ul>
          <li>
            <h1>Hello</h1>
          </li>
          <li>
            <Link href="/test-page">Test page</Link>
          </li>
          <li>{title}</li>
          <li>
            <button type="button" onClick={handleButtonClick}>
              Reset state
            </button>
          </li>
        </ul>
      </CenterLayout>
    </PageLayout>
  );
}

export default Home;
