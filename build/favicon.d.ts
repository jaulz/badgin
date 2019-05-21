import { Value } from './index'
export declare type Options = {
  fontSize: number
  fontFamily: string
  background: string
  color: string
  height: number
  width: number
  opacity: number
}
export declare const defaultOptions: Options
export declare function isAvailable(): boolean
export declare function set(value: Value, options: Options): void
export declare function clear(options: Options): void
//# sourceMappingURL=favicon.d.ts.map
