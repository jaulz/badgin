import { Value } from './index'

export default function isIndicator(value: Value) {
  return value === undefined || !Number.isInteger(value as any)
}
