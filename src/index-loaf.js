

function wait(ms) {
  const start = new Date();
  while ((new Date() - start) < ms);
}

setTimeout(function changeDom() {
  console.log('T1');
  document.getElementsByTagName('body')[0].innerHTML = 'Next Render';
  wait(40);
}, 10);

new Promise(resolve => setTimeout(resolve, 10))
  .then(function microTask1() {
    console.log('M1')
    requestAnimationFrame(function animationFrame1() {
      console.log('rAF1')
      wait(40);
      queueMicrotask(() => {
        console.log('M2')
      });
    });
  }).then(function microTask3() {
    console.log('M3')
    requestAnimationFrame(function animationFrame2() {
      console.log('rAF2')
    });
    wait(40);
  })
