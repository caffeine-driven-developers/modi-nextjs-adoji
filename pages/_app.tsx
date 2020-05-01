import React from 'react';
import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';

import { Layout } from 'antd';

import { makeStore } from '../src/store';

import Navbar from '../src/layouts/Navbar';
import Footer from '../src/layouts/Footer';

import 'normalize.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import './style.css';
import '../src/antd.less';

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
            <Layout>
              <Navbar />
              {/* <div > */}
              <Layout.Content style={{ minHeight: '85vh' }}>
                <Component {...pageProps} />
              </Layout.Content>
              {/* </div> */}
              <Layout.Footer>
                <Footer />
              </Layout.Footer>
            </Layout>
          </Provider>
        </Container>
      );
    }
  },
);
