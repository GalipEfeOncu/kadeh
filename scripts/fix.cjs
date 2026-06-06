const fs = require('fs');

let r = fs.readFileSync('src/data/ron.js', 'utf-8');
r = r.replace("Bacardí\\\\'nin", "Bacardí\\'nin");
fs.writeFileSync('src/data/ron.js', r);

let v = fs.readFileSync('src/data/votka.js', 'utf-8');
// Fix any other possible single quote unescaped issues
v = v.replace(/([a-zA-ZçğıöşüÇĞİÖŞÜ])'([a-zA-ZçğıöşüÇĞİÖŞÜ])/g, (match, p1, p2) => {
    return p1 + "\\'" + p2;
});
fs.writeFileSync('src/data/votka.js', v);

console.log('Fixed quotes.');
