// @ts-check
/// <reference lib="esnext" />
/// <reference lib="esnext.iterator" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="webworker.importscripts" />
"use strict";

/**
 * @name typeOf.js
 * @version 1.0.0
 * @author Ferenc Czigler
 * @see https://github.com/Serrin/typeOf.js
 * @license MIT https://opensource.org/licenses/MIT
 */

/**
 * @description Primitive types.
 *
 * @internal
 */
type TypeOfTag =
  | "null" | "undefined"
  | "number" | "bigint" | "boolean" | "string" | "symbol"
  | "object" | "function";

/**
 * Extended typeof operator with "null" type as string.
 *
 * @param {unknown} value
 * @returns {string}
 */
const typeOf = (value: unknown): TypeOfTag =>
  value === null ? "null" : typeof value;

export { typeOf };

export default typeOf;
