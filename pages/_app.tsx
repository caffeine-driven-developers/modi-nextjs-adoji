import React from 'react';
import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
import { makeStore } from '../src/store';

import Navbar from '../src/layouts/Navbar';
import Footer from '../src/layouts/Footer';

import 'normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';

export default withRedux(makeStore, { debug: true })(
  class MyApp extends App<{ store: ReturnType<typeof makeStore> }> {
    static async getInitialProps({ Component, ctx }) {
      return {
        pageProps: {
          // Call page-level getInitialProps
          ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
        },
      };
    }

    render() {
      const { Component, pageProps, store } = this.props;
      return (
        <Container>
          <Provider store={store}>
            <Navbar />
            <div style={{ minHeight: '95vh' }}>
              <Component {...pageProps} />
            </div>
            <Footer />
          </Provider>
        </Container>
      );
    }
  },
);
