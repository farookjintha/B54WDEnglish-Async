// Promises -> it makes async exection to be sync. It makes the next execution to wait until it executes the previous execution.

// states of promise ->
// 1. Pending
// 2. Fulfilled or Resolved
// 3. Rejected

// To handle promises:

// promise1.then(() => {}).catch(() => {}) -> this will handle one promise on fulfilled/rejected state

// Promise.all([promise1, promise2, promise3]).then().catch() -> this will handle multiple promises, and all promises are  fulfilled, those promise will be executed in then block,
// if any promise is rejected, it will be exectued in catch block;

// Promise.any([promise1, promise2, promise3]).then().catch() -> this will handle multiple promises, and if any promise is fulfilled, it will be executed in then block,
// if all promises are rejected, those promises will be exectued in catch block;

// Promise.allSettled([promise1, promise2, promise3]).then().catch() -> this will handle multiple promises, and irrespective of status,
//  if all promises are settled (done executing), it will be handled in then with status and reason.

// let myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("On Success");
//     reject("On Failure");
//   }, 5000);
// });

// // Handling Promise - using Callback;
// myPromise
//   .then((response) => {
//     console.log("Response: ", response);
//   })
//   .catch((error) => {
//     console.log("Error: ", error);
//   })
//   .finally(() => {
//     console.log("Executed Finally..");
//   });

let promise1 = new Promise((resolve, reject) => {
  reject("Hello");
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("How are you!");
  }, 5000);
});

let promise3 = new Promise((resolve, reject) => {
  resolve("Good Evening!");
});

// To handle multiple promises:
// Promise.all([promise1, promise2, promise3])
//   .then((response) => {
//     console.log("Response: ", response);
//   })
//   .catch((error) => {
//     console.log("Error: ", error);
//   })
//   .finally(() => {
//     console.log("Executed Finally..");
//   });

Promise.allSettled([promise1, promise2, promise3])
  .then((response) => {
    console.log("Response: ", response);
  })
  .catch((error) => {
    console.log("Error: ", error);
  })
  .finally(() => {
    console.log("Executed Finally..");
  });

// Promise.any([promise1, promise2, promise3])
//   .then((response) => {
//     console.log("Response: ", response);
//   })
//   .catch((error) => {
//     console.log("Error: ", error);
//   })
//   .finally(() => {
//     console.log("Executed Finally..");
//   });
