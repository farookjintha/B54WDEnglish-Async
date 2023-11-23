// setTimeout(() => {
//   console.log("Running after 5s");
// }, 5000);

// console.log("Hello World");

// // Callback;

function greetings(name, callbackFunction) {
  console.log("Hey!");
  callbackFunction(name);
}

function wishGoodLuck(name) {
  console.log(
    "So happy for your new role! Wishing you the success in whatever you do!"
  );
}

setTimeout(greetings, 5000, "Arjun", wishGoodLuck);
