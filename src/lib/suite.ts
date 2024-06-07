import { logger as logging } from "./logger.js";
import { join, resolve } from "node:path";
import { readFileSync } from "node:fs";
import type { RuntimeBenchmarkConfig, RuntimeConfig, SuiteClass, Env } from "../types";

/**
 * Read a benchmark suite configuration file from disk; the file is expected to be JSON,
 * JavaScript, or TypeScript, and is expected to be importable on the current runtime.
 *
 * If the file ends in `.json`, it is read as a normal file and decoded as JSON. If the file has
 * any other extension, it is dynamically imported and expected to provide the suite configuration
 * as the default export.
 *
 * The provided path will be resolved against the current working directory.
 *
 * @param file Relative path to the file, as provided on the command line
 * @returns The parsed suite configuration
 */
export async function readSuite(file: string): Promise<RuntimeBenchmarkConfig> {
  const logger = logging()
  const path = resolve(process.cwd(), file);
  if (path.endsWith(".json")) {
    logger.debug("Reading suite as JSON...");
    return JSON.parse(readFileSync(path, {encoding: 'utf-8'})) as RuntimeBenchmarkConfig;
  }
  logger.debug("Importing suite as module...");
  const suite = await import(join(process.cwd(), file));
  return suite.default as RuntimeBenchmarkConfig;
}
