import App from 'next/app'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { withReduxStore } from '../src/utils'
import { theme } from '../src/theme'

class MyApp extends App {
  render() {
    const { Component, pageProps, store } = this.props
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    )
  }
}

export default withReduxStore(MyApp)
