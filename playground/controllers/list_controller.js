// list_controller.js

import { Controller } from '@hotwired/stimulus'
import { useRender, h } from 'stimulus-render'

/** @jsx h */

export default class extends Controller {
  static targets = ['item']

  connect () {
    useRender(this)
  }

  renderListTarget(target) {
    return (
      <span>
        {marked.parse(target.dataset.value)}
      </span>
    )
  }
  }
}
