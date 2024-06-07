/**
 * Sample benchmark script using Mitata globals.
 */

import assert from "node:assert";
import fs from "node:fs";

bench('fs.readFileSync', () => {
  assert.ok(fs.readFileSync('tests/smoke/fs.mjs', {encoding: 'utf8'}));
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
