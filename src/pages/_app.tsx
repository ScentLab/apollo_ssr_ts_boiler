import React, { Fragment } from 'react'
import { ApolloProvider as ApolloHookProvider } from 'react-apollo-hooks'
import { Container, default as NextApp } from 'next/app'
import Head from 'next/head'

import { createApolloClient } from '~/ApolloClient'

export default class App extends NextApp<{}, {}>{
  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Head>
          <title>APOLLO_SSR_TS_BOILERPLATE</title>
          <link rel='shortcut icon' href={'~/assets/favicon.png?url'} />
        </Head>
        <ApolloHookProvider client={createApolloClient()}>
          <Fragment>
            <Component {...pageProps} />
          </Fragment>
        </ApolloHookProvider>
      </Container>
    )
  }
}