'use strict'

const constants = require('../constants/gist')
const Base = require('./base')

class GistActions extends Base {

  constructor () {
    super()
  }

  create (gist) {
    this.dispatcher.dispatch({
      action: constants.GIST_CREATE,
      gist: gist
    })
  }

  update (id, gist) {
    this.dispatcher.dispatch({
      action: constants.GIST_UPDATE,
      id: id,
      gist: gist
    })
  }

  del (id) {
    this.dispatcher.dispatch({
      action: constants.GIST_DELETE,
      id: id
    })
  }

  all (refresh) {
    this.dispatcher.dispatch({
      action: constants.GISTS_ALL,
      refresh: refresh
    })
  }

  get (id) {
    this.dispatcher.dispatch({
      action: constants.GIST_GET,
      id: id
    })
  }

  sendAll (gists) {
    this.dispatcher.dispatch({
      action: constants.GIST_ALL_RETURNED,
      gists: gists
    })
  }

  sendGist (gist) {
    this.dispatcher.dispatch({
      action: constants.GIST_RETURNED,
      gist: gist
    })
  }

  updated (gist) {
    this.dispatcher.dispatch({
      action: constants.GIST_UPDATED,
      gist: gist
    })
  }

  preview (gist) {
    this.dispatcher.dispatch({
      action: constants.PREVIEW_MARKDOWN,
      gist: gist
    })
  }

}

module.exports = new GistActions()
