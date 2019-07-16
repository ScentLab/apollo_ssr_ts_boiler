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
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
          <meta name="  " content="Jekyll v3.8.5" />
          <meta property="og:title" content={SITE_TITLE} />
          <meta name="author" content="Rayleigh Ko" />
          <meta property="og:locale" content="en_US" />
          <meta name="description" content="Apollo SSR TS Boiler." />
          <meta property="og:description" content="Apollo SSR TS Boiler." />
          <link rel="canonical" href="your-url" />
          <meta property="og:url" content="your-url" />
          <meta property="og:site_name" content={SITE_TITLE} />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@example" />
          <meta name="twitter:creator" content="@RayleighKo" />
          <meta property="fb:app_id" content="your-app-id" />
          <meta name="google-site-verification" content="your_verification" />
          <meta name="format-detection" content="telephone=no, address=no, email=no" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <meta name="apple-mobile-web-app-title" content={SITE_TITLE} />
          <meta name="application-name" content={SITE_TITLE} />
          <meta name="msapplication-TileImage" content="/mstile-150x150.png" />
          <meta name="google-site-verification" content="your_verification" />
          <link rel="icon" sizes="192x192" href="/logo-192x192.png" />
          <link rel="apple-touch-icon" href="/images/icons/apple-touch-icon.png" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
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
