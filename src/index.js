import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import store from './store'
import AppContainer from './views/App/container'
import './index.scss'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941

injectTapEventPlugin()

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#18cb49'
  },
  fontFamily: 'Open Sans'
})

ReactDOM.render(
    <MuiThemeProvider muiTheme={muiTheme}>
      <Provider store={store}>
        <BrowserRouter>
          <AppContainer />
        </BrowserRouter>
      </Provider>
    </MuiThemeProvider>,
  document.getElementById('root')
)
