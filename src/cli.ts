import { join, resolve } from "node:path";
import { writeFileSync } from "node:fs";
import { logger as logging } from "./lib/logger.js";
import { readSuite } from "./lib/suite.js"
import { executeSuite } from "./lib/driver.js"

export default async function runner(): Promise<void> {
  // if not given an argument, fail
  if (process.argv.length < 3) {
    console.error("Usage: runner <suite> [output-file]");
    process.exit(1);
  }

  // locate suite via first argument
  const logger = logging();
  const suitePath = process.argv[2];
  const outputFile = process.argv.length > 3 ? process.argv[3] : 'bench-results.json';
  logger.info(`Reading suite from ${suitePath}...`);
  const suite = await readSuite(suitePath);
  logger.debug(`Suite for execution: ` + JSON.stringify(suite, null, 2));

  // execute the suite
  const start = +(new Date());
  logger.debug('Running benchmarks...');
  const allResults = await executeSuite(suite);
  const done = +(new Date());

  // write the results to stdout
  logger.info(`All benchmarks completed in ${Math.round(done - start)}ms. Writing to '${outputFile}'...`);

  const resolvedOutputPath = resolve(join(process.cwd(), outputFile));
  writeFileSync(resolvedOutputPath, JSON.stringify(allResults, null, 2), { encoding: 'utf8' });
  logger.info(`Done! Results written to '${resolvedOutputPath}'.`)
  process.exit(0);
}
