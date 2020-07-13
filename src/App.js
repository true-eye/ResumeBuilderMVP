import React from 'react'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import { PersistGate } from 'redux-persist/integration/react'
import Routes from './routes/index'
import configureStore from './store'

const { persistor, store } = configureStore()
const history = createBrowserHistory()

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Routes history={history} />
    </PersistGate>
  </Provider>
)

export default App
