/**
 * Sample benchmark script using Mitata globals.
 */

import assert from "node:assert";

bench('json_string', () => {
  const x = JSON.stringify("hello world");
  const y = JSON.parse(x);
  const z = JSON.stringify({hi: "a long string in an object"});
  const w = JSON.parse(z);
  assert.ok(w);
});

// bench('noop2', () => {});

// group('group', () => {
//   baseline('baseline', () => {});
//   bench('Date.now()', () => Date.now());
//   bench('performance.now()', () => performance.now());
// });

// group({ name: 'group2', summary: false }, () => {
//   bench('new Array(0)', () => new Array(0));
//   bench('new Array(1024)', () => new Array(1024));
// });
