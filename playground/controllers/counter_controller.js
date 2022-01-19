import { Controller } from '@hotwired/stimulus'
import { useRender, h } from 'stimulus-render'

/** @jsx h */

export default class extends Controller {
  static values = { counter: 1 }

  connect () {
    useRender(this)
  }

  increment () {
    this.counterValue += 1
  }

  render () {
    return (
      <div id="counter">
        <button data-action="click->counter#increment">
          Count: {this.counterValue}
        </button>
      </div>
    )
  }
}
