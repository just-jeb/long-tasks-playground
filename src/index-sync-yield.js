import { data } from './generated-sync-yield/file0.js';

data.then(str => {
    console.log(`That's the substring: ${str.substring(0, 100)}`);
});