import { run, bench, group, baseline } from 'mitata';

// @ts-ignore
globalThis['runBenchmarks'] = run;
// @ts-ignore
globalThis['bench'] = bench;
// @ts-ignore
globalThis['group'] = group;
// @ts-ignore
globalThis['baseline'] = baseline;
