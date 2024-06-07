import { run, bench, group, baseline } from 'npm:mitata';

// @ts-ignore
globalThis['runBenchmarks'] = run;
// @ts-ignore
globalThis['bench'] = bench;
// @ts-ignore
globalThis['group'] = group;
// @ts-ignore
globalThis['baseline'] = baseline;
