import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-client'
import { ApolloProvider } from 'react-apollo'

import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { InMemoryCache } from 'apollo-boost'

const cache = new InMemoryCache();

const client = new ApolloClient ({
  link: 'http://localhost:5000/graphiql',
  cache
})

const AppContainer = () => (
  <ApolloProvider client={client}>
  <App />
  </ApolloProvider>
)

ReactDOM.render(<AppContainer />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
