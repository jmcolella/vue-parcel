function hello(name: string) {
  console.log(`Hello ${name}!`);
}

console.log(hello('Matt'));

if (module.hot) {
  module.hot.accept();
}