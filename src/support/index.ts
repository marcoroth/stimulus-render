import { Controller } from '@hotwired/stimulus'

export const method = (controller: Controller, methodName: string): Function | undefined => {
  const method = (controller as any)[methodName]
  if (typeof method == 'function') {
    return method
  } else {
    return undefined
  }
}

export function camelize(value: string) {
  return value.replace(/(?:[_-])([a-z0-9])/g, (_, char) => char.toUpperCase())
}
