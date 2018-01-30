import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { connect } from 'react-redux'
import { pick } from 'lodash'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import Toggle from 'material-ui/Toggle'
import Tabs from '../components/tabs'
import Navigator from '../components/navigator'
import Frame from '../components/frame'
import { toggleIncognito } from '../actions'
import { getGithubWidget } from '../util'
import './app.css'

const App = props => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <div className="app">
      <div className="app-options">
        <Toggle
          label="Incognito mode"
          labelPosition="right"
          onToggle={(e, isInputChecked) => {
            props.dispatch(toggleIncognito(isInputChecked))
          }}
          style={{
            width: '200px',
          }}
        />
        <div
          className="app-widget"
          dangerouslySetInnerHTML={{ __html: getGithubWidget() }}
        />
      </div>
      <div
        className={classNames('app-container', {
          incognito: props.isIncognito,
        })}
      >
        <Tabs {...props} />
        <Navigator
          {...pick(props, ['dispatch', 'url', 'isInputFocus', 'input'])}
        />
        <Frame {...props} />
      </div>
    </div>
  </MuiThemeProvider>
)

App.propTypes = {
  isIncognito: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  tabs: Object.keys(state.tabs).map(id => ({
    id,
    ...state.tabs[id],
    isActive: state.activeTab === id,
  })),
  url: state.tabs[state.activeTab].url,
  isInputFocus: state.isInputFocus,
  input: state.input,
  isIncognito: state.isIncognito,
})

export default connect(mapStateToProps)(App)
