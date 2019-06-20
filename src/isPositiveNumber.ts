import { Value } from './index'

export default function isPositiveNumber(value: Value): value is number {
  return !!value && Number.isInteger(value as any) && value >= 0
}
