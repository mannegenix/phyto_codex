import { readFileSync } from 'node:fs';
const p=JSON.parse(readFileSync(new URL('../docs/tracking.json',import.meta.url)));
for(const phase of p.phases){console.log(`${phase.id} [${phase.status}] ${phase.name}`);for(const c of p.components.filter(c=>c.phase===phase.id))console.log(`  ${c.id} [${c.status}] ${c.name}`)}
