const el = document.createElement('div');
el.innerText = 'Hello World';
document.body.appendChild(el);

import('./generated-sync-yield/file0.js')
.then(file => file.data)
.then(data => {
    console.log(`That's the substring: ${data.substring(0, 100)}`);
});