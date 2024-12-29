console.log("Teste");

console.log("x");

console.log("y");

console.log("z");

console.log("finalizamos");

function addCart(p) {
  cart = {};
  return cart;
}

const date = new Date()

setTimeout(() => {
  console.log(
    `[${date.getDate()}-${date.getMonth()}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}] - Set time out 1`
  );
  // console.log("Set time out 1");
}, 1000);

setTimeout(() => {
    console.log(
        `[${date.getDate()}-${date.getMonth()}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}] - Set time out 2`
      );
  // console.log("Set time out 2");
}, 2000);
setTimeout(() => {
    console.log(
        `[${date.getDate()}-${date.getMonth()}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}] - Set time out 3`
      );
  // console.log("Set time out 3");
}, 3000);
setTimeout(() => {
    console.log(
        `[${date.getDate()}-${date.getMonth()}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}] - Set time out 4`
      );
  // console.log("Set time out 4");
}, 4000);
setTimeout(() => {
    console.log(
        `[${date.getDate()}-${date.getMonth()}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}] - Set time out 5`
      );
  // console.log("Set time out 5");
}, 5000);
