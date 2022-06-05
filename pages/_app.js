import '../styles/globals.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";
import { ThemeProvider } from 'styled-components';
import { createTheme } from '@mui/system';

const client = new ApolloClient({
  uri: 'https://b2cdemo.getswift.asia/graphql',
  cache: new InMemoryCache()
});

const theme = createTheme();

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
    
  </ThemeProvider>
  )
}

export default MyApp
