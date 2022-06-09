import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { ModalProvider } from 'react-simple-modal-provider';

import PageLayout from '@layouts/page-layout/page-layout';
import SvgSpriteIcon from '@shared/svg-sprite-icon/svg-sprite-icon';
import ExampleForm from '@containers/example-form/example-form';
import ExampleTriggerModal from '@containers/example-trigger-modal/example-trigger-modal';
import TestModal from '@containers/test-modal/test-modal';

import Icon from '@assets/img/atention.svg';
import img from '@assets/img/icon.png';

function TestPage() {
  return (
    <ModalProvider value={[TestModal]}>
      <Head>
        <title>Test page</title>
      </Head>
      <PageLayout>
        <ul>
          <li>
            <h1>Hello from test page</h1>
          </li>
          <li>
            <ExampleTriggerModal />
          </li>
          <li>
            <Image placeholder="blur" src={img} alt="test" />
          </li>
          <li>
            <Icon className="svg-icon" style={{ width: '30px' }} />
          </li>
          <li>
            <SvgSpriteIcon id="telegram" />
          </li>
          <li>
            <SvgSpriteIcon id="phone-call" />
          </li>
          <li>
            <SvgSpriteIcon id="shopping-cart" />
          </li>
          <li>
            <ExampleForm />
          </li>
          <li>
            <Link href="/">Go home</Link>
          </li>
        </ul>
      </PageLayout>
    </ModalProvider>
  );
}

export default TestPage;
