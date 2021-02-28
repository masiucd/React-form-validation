export const emailRe = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

export const isObject = (obj: null) => obj !== null && typeof obj === "object"

export function setNestedObjectValues(
  object: any,
  value: any,
  visited = new WeakMap(),
  response: any = {}
) {
  for (let k of Object.keys(object)) {
    const val = object[k]
    if (isObject(val)) {
      if (!visited.get(val)) {
        visited.set(val, true)
        // In order to keep array values consistent for both dot path  and
        // bracket syntax, we need to check if this is an array so that
        // this will output  { friends: [true] } and not { friends: { "0": true } }
        response[k] = Array.isArray(val) ? [] : {}
        setNestedObjectValues(val, value, visited, response[k])
      }
    } else {
      response[k] = value
    }
  }

  return response
}
