
/**
 * This file is used to declare global types made available via Mitata for cross-runtime
 * benchmark scripts.
 */

/// <reference types="mitata" />

declare global {
  export function bench(name: string, fn: () => any): void;
  export function baseline(name: string, fn: () => any): void;
  
  export function group(fn: () => void): void;
  export function group(name: string, fn: () => void): void;
  export function group(options: { name?: string, summary?: boolean }, fn: () => void): void;  
}

export {};
