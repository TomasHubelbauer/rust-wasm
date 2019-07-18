# Rust Wasm

In this repository I am test-driving Rust & Wasm integration to see how usable it is.
I will aim for a minimal example which can be recreated just by following the steps.

I am following the following tutorial to get these results:

https://rustwasm.github.io/docs/wasm-pack/tutorials/npm-browser-packages/getting-started.html

I toyed around with the idea of doing the manual setup, but after reading up on
the template I warmed up to using it, because it seems to have useful bits in it.

- Install Rust using https://rustup.rs or update using `rustup update`
- Install `wasm-pack` using https://rustwasm.github.io/wasm-pack/installer
- Install Cargo Generate using `cargo install cargo-generate`
- Run `cargo generate --git https://github.com/rustwasm/wasm-pack-template`
- Remove the template junk (ugh) and move to the root directory
- Run `was-pack build --target web` (`web` to avoid the bundler trash)
- Run `npx serve .` and access `http://localhost:5000` (in your clipboard now)
