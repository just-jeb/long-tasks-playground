const el = document.createElement('div');
el.innerText = 'Hello World';
document.body.appendChild(el);

import('./generated-sync/file0.js').then(file => {
    console.log(`That's the substring: ${file.data.substring(0, 100)}`);
});