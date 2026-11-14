import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// Angry Brontosaur (BRONTO) — make.fun coin-launch-01 entry.
// Deterministic: copies LAUNCH.json (mint + create-tx signature) to /output.
// The output is byte-identical on every run — no timestamps, no randomness.
const launch = readFileSync(join(process.cwd(), "LAUNCH.json"), "utf8");
mkdirSync("/output", { recursive: true });
writeFileSync(join("/output", "LAUNCH.json"), launch);
