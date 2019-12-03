import { Value } from './index'

export default function isPositiveNumber(value: Value): value is number {
  return (
    typeof value !== 'undefined' && Number.isInteger(value as any) && value >= 0
  )
}
