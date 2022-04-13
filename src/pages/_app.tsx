import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>LOLDesign - showMeTheCode</title>
      </Head>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
