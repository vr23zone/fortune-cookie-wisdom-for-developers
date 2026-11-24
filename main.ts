import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE: string =
  "A legacy system is just a younger you, still waiting for an apology.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE + "\n", "utf8");
