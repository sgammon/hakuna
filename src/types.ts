export type RuntimeConfig = {
  name: string;
  bin: string;
  version?: string;
}

export type RuntimeBenchmarkConfig = {
  runtimes?: (string | RuntimeConfig)[];
  suites?:   Array<Array<SuiteClass | string>>;
}

export type SuiteClass = {
  runtimes?: string[];
  args?:     string[];
  env?:      Env;
}

export type InterpretedSuite = {
  name: string;
  entry: string;
  resolved: string;
  runtimes: string[];
  args: string[];
  env: { [key: string]: string; };
  sysEnv: boolean;
}

export type RuntimeInfo = RuntimeConfig & {
  resolved: string;
}

export type SingleBenchmarkResults = {
  runtime: RuntimeInfo,
  suite: InterpretedSuite,
  totalMs: number,
  bench?: any,
  error?: string,
}

export type MergedBenchmarkResults = {
  all: SingleBenchmarkResults[];
}

export type Env = {
  [key: string]: string;
}

export type RunnerOptions = {
  units?: boolean;
  silent?: boolean;
  avg?: boolean;
  json?: boolean;
  colors?: boolean;
  min_max?: boolean;
  percentiles?: boolean;
}
