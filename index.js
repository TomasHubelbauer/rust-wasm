import init, { greet } from './pkg/demo.js';

window.addEventListener('load', async () => {
  // https://github.com/rustwasm/wasm-bindgen/tree/master/examples/without-a-bundler
  await init();
  greet();
});
