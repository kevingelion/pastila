'use strict'

const React = require('react')
const ReactDOM = require('react-dom')
const qs = require('querystring')
const query = qs.parse(window.location.search.split('?').pop())
const App = require('./components/app')
const AppActions = require('../actions/app')

ReactDOM.render(<App isAuthed={query.isAuthed} />, document.getElementById('pastila'))
// save the state of the app before closing
window.onbeforeunload = function () {
  AppActions.getState()
  window.onbeforeunload = null
  return false
}