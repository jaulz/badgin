import { Value } from './index'

export default function isEmpty(value: Value) {
  return !value || !Number.parseInt(value as any) || value < 0
}
