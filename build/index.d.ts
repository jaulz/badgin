import * as favicon from './favicon'
export declare type Value = number | null
export interface Interface {
  set: (value: Value) => void
  clear: () => void
}
export declare type Method = 'Badging' | 'Favicon' | 'Title'
export interface Options {
  method: Method
  favicon: favicon.Options
}
/**
 * Sets badge
 */
export declare function set(value: Value, options?: Options): void
/**
 * Clears badge
 */
export declare function clear(options?: Options): void
//# sourceMappingURL=index.d.ts.map
