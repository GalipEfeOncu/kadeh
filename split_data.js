const fs = require('fs');

function splitFile(filename) {
  const content = fs.readFileSync(filename, 'utf-8');
  
  // Find all objects in the array
  const regex = /\{\s+id:\s+['"]([^'"]+)['"][\s\S]*?(?=\n  \{|\n\];)/g;
  let match;
  const items = [];
  
  while ((match = regex.exec(content)) !== null) {
    items.push(match[0]);
  }
  
  return items;
}

const items123 = splitFile('src/data/drinks_phase123.js');
const items4 = splitFile('src/data/drinks_phase4.js');
const items5_likor = splitFile('src/data/drinks_phase5_likor.js');
const items5_kokteyl = splitFile('src/data/drinks_phase5_kokteyl.js');

const allItems = [...items123, ...items4, ...items5_likor, ...items5_kokteyl];

const categorized = {};

allItems.forEach(item => {
  const match = item.match(/ana_tur:\s+['"]([^'"]+)['"]/);
  if (match) {
    let type = match[1];
    // normalize type for filename
    type = type.replace('rakı', 'raki').replace('şarap', 'sarap').replace('liköl', 'likor'); // campari ana_tur was 'liköl' by mistake?
    
    if (!categorized[type]) {
      categorized[type] = [];
    }
    categorized[type].push(item);
  }
});

for (const [type, items] of Object.entries(categorized)) {
  const fileContent = `export const ${type} = [\n  ${items.join(',\n  ')}\n];\n`;
  fs.writeFileSync(`src/data/${type}.js`, fileContent);
}

const imports = Object.keys(categorized).map(type => `import { ${type} } from './${type}.js';`).join('\n');
const exportsArr = Object.keys(categorized).map(type => `...${type}`).join(',\n  ');

const mainFile = `${imports}\n\nexport const drinks = [\n  ${exportsArr}\n];\n`;
fs.writeFileSync('src/data/drinks.js', mainFile);

console.log('Done splitting!');
