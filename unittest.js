
// import all functions

import { typeOf } from "./typeOf.js";
globalThis.typeOf = typeOf;


// import with default with name
/*
import { default as typeOf } from "./typeOf.js";
globalThis.typeOf = typeOf;
*/

// import the defaultExport object
/*
import defaultExport from "./typeOf.js";
globalThis.typeOf = defaultExport;
*/


/* typeOf.js v1.0.0 testcases for ESM environment */

const { assert, log } = console;

log("Start of the test.");

assert(typeOf(null) === "null", "null");

assert(typeOf(undefined) === "undefined", "undefined");
assert(typeOf() === "undefined", "undefined");

assert(typeOf(42) === "number", "number 42");
assert(typeOf(42.1) === "number", "number 42.1");
assert(typeOf(NaN) === "number", "number NaN");

assert(typeOf(42n) === "bigint", "bigint");

assert(typeOf(true) === "boolean", "boolean true");
assert(typeOf(false) === "boolean", "boolean false");

assert(typeOf("lorem ipsum") === "string", "string");

assert(typeOf(Symbol(42)) === "symbol", "symbol");

assert(typeOf({}) === "object", "object object");
assert(typeOf([]) === "object", "object array");
assert(typeOf(new Map()) === "object", "object map");
assert(typeOf(new Set()) === "object", "object set");

assert(typeOf(function () {}) === "function", "function");
assert(typeOf(() => 0) === "function", "function");

log("End of the test.");
