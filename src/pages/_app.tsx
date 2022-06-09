import type { AppProps } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';

import { store } from '@store/index';
import { createAPI } from '@services/api';

import '@assets/styles/index.scss';

import SvgSprite from '@assets/sprites/sprite.svg';

export const api = createAPI();

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <SvgSprite className="svg-sprite" />
    </Provider>
  );
}

export default App;
