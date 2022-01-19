// list_controller.js

import { Controller } from '@hotwired/stimulus'
import { useRender, h } from 'stimulus-render'

/** @jsx h */

export default class extends Controller {
  connect() {
    useRender(this)
  }
}
