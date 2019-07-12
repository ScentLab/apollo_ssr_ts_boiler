import React, { Fragment } from 'react';
import { ApolloProvider } from 'react-apollo-hooks';
import { Container, default as NextApp } from 'next/app';
import Head from 'next/head';

import { createApolloClient } from '../ApolloClient';
const SITE_TITLE = 'apollo_ssr_ts_boilerplate';

export default class App extends NextApp<any> {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title>{SITE_TITLE}</title>
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
          />
          <meta name="format-detection" content="telephone=no, address=no, email=no" />
          <link rel="shortcut icon" href={'/favicon.png'} />
        </Head>
        <ApolloProvider client={createApolloClient()}>
          <Fragment>
            <Component {...pageProps} />
          </Fragment>
        </ApolloProvider>
      </Container>
    );
  }
}
