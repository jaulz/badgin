import * as favicon from './favicon'
import * as title from './title'
declare type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T[P] extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : DeepPartial<T[P]>
}
export declare type Value = number | null | undefined
export interface Interface {
  set: (value: Value) => void
  clear: () => void
}
export declare type Method = 'Badging' | 'Favicon' | 'Title'
export interface Options {
  method: Method
  favicon: favicon.Options
  title: title.Options
}
/**
 * Sets badge
 */
export declare function set(value: Value, options?: DeepPartial<Options>): void
/**
 * Clears badge
 */
export declare function clear(): void
export {}
//# sourceMappingURL=index.d.ts.map
