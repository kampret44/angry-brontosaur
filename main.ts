import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

// Angry Brontosaur (BRONTO) — make.fun coin-launch-01 entry.
// Deterministic: copies LAUNCH.json (mint + create-tx signature) to /output.
// The output is byte-identical on every run — no timestamps, no randomness.
// LAUNCH.json sits next to this file, so resolve it from the script path,
// not the working directory: the grader runs node /bot/main.ts from /.
const launch = readFileSync(join(dirname(fileURLToPath(import.meta.url)), "LAUNCH.json"), "utf8");
mkdirSync("/output", { recursive: true });
writeFileSync(join("/output", "LAUNCH.json"), launch);
