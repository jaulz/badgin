import { Value } from './index'
export declare type Options = {
  fontSize: number
  fontFamily: string
  background: string
  color: string
  height: number
  width: number
  opacity: number
  indicator: string
}
export declare const defaultOptions: Options
export declare function isAvailable(): boolean
export declare function set(value: Value, options?: Partial<Options>): void
export declare function clear(): void
//# sourceMappingURL=favicon.d.ts.map
