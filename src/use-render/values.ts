import { Controller } from '@hotwired/stimulus'
import { camelize } from '../support'

interface StateController extends Controller {
  values: () => Object
  state: () => Object
}

export const useValues = (controller: StateController) => {
  Object.assign(controller, {
    values () {
      // @ts-ignore
      const map = controller.context.valueObserver.valueDescriptorMap
      const values: { [key: string]: Function } = {}

      Object.keys(map).forEach(key => {
        const descriptor = map[key]
        const valueName = camelize(descriptor.key.slice(0, -6))

        // @ts-ignore
        values[valueName] = controller[descriptor.name]
      })

      return values
    },

    state () {
      return this.values()
    }
  })
}
