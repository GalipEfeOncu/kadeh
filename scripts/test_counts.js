import { drinks } from './src/data/drinks.js';

const grouped = {};
drinks.forEach(d => {
  if (!grouped[d.ana_tur]) {
    grouped[d.ana_tur] = [];
  }
  grouped[d.ana_tur].push({ id: d.id, name: d.name });
});

console.log("=== DRINKS BY CATEGORY ===");
for (const [cat, list] of Object.entries(grouped)) {
  console.log(`\nCategory: ${cat} (Count: ${list.length})`);
  list.forEach(item => {
    console.log(`  - [${item.id}] ${item.name}`);
  });
}
