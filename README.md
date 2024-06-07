
# `hakuna`

> [!WARNING]
> This library has not been published to NPM yet.

Small utility for running [`mitata`](https://github.com/evanwashere/mitata) across several runtimes and preparing reports from the results.

## Usage

**First, you:**
```
npm i --save-dev hakuna
yarn add --dev hakuna
pnpm i --save-dev hakuna
bun add --dev hakuna
```

**Then, you make a benchmark spec file:**

```
vim ./bench-spec.json
```
```json
{
  "runtimes": ["node", "deno", "bun", "elide"],
  "suites": [
    ["./tests/smoke/example.mjs", {"runtimes": ["node", "bun"]}],
    ["./tests/smoke/json.mjs"],
    ["./tests/smoke/fs.mjs"]
  ]
}
```

> This is just an example; obviously, you should set your own test file path.

**Finally, you:**

```
npx hakuna ./bench-spec.json
```

**And you get:**

```
cat ./bench-results.json | jq .
```
```json
{
  "all": [
    {
      "runtime": {
        "name": "node",
        "bin": "node",
        "resolved": "/Users/sam/.nvm/versions/node/v18.16.0/bin/node"
      },
      "suite": {
        "name": "example.mjs",
        "entry": "./tests/smoke/example.mjs",
        "resolved": "/Volumes/VAULTROOM/hakuna/tests/smoke/example.mjs",
        "runtimes": [
          "node",
          "bun",
          "elide"
        ],
        "args": [],
        "env": {},
        "sysEnv": true
      },
      "bench": {
        "benchmarks": [
          {
            "name": "noop",
            "group": null,
            "time": 500,
            "warmup": true,
            "baseline": false,
            "async": false,
            "stats": {
              "min": 0,
              "max": 225.03662109375,
              "p50": 0.06103515625,
              "p75": 0.06103515625,
              "p99": 0.08154296875,
              "p999": 0.18310546875,
              "avg": 0.063877119053025
            }
          },
        ]
      }
    }
  ]
}
```
