# Stimulus Render

## Getting Started

```bash
yarn add stimulus-render
```

### Counter Example

```html
<div data-controller="counter"></div>
```


```js
// app/javascript/controllers/counter_controller.js

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
```

### List/Item Example


```html
<div data-controller="list">
  <ul>
    <li data-list-target="item" data-value="# Title 1"></li>
    <li data-list-target="item" data-value="**Two Bold**"></li>
    <li data-list-target="item" data-value="[Three Link](https://github.com/marcoroth/stimulus-render)"></li>
  </ul>
</div>
```


```js
// app/javascript/controllers/list_controller.js

import { Controller } from '@hotwired/stimulus'
import { useRender, h } from 'stimulus-render'
import { processMarkdown } from 'some-markdown-rendering-package'

/** @jsx h */

export default class extends Controller {
  static tagets = ['item']

  connect () {
    useRender(this)
  }

  renderListTarget(target) {
    return (
      <span>
        {processMarkdown(target.dataset.value)}
      </span>
    )
  }
}
```
