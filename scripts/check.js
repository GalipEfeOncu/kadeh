import { drinks } from './src/data/drinks.js';
console.log("Drinks is array:", Array.isArray(drinks));
console.log("Drinks length:", drinks?.length);
console.log("Any undefined?", drinks.some(d => !d || d === undefined));
console.log("Any missing id?", drinks.some(d => !d.id));
console.log("Any missing ana_tur?", drinks.some(d => !d.ana_tur));
