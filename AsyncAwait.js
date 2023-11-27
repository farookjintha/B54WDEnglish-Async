function promise1() {
  return new Promise((resolve, reject) => {
    reject("Hello");
  });
}

function promise2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("How are you!");
    }, 5000);
  });
}

function promise3() {
  return new Promise((resolve, reject) => {
    resolve("Good Evening!");
  });
}
// async... await

// try...catch

// async function promiseHandling() {
//   try {
//     let promise1Handler = await promise1();
//     let promise2Handler = await promise2();
//     let promise3Handler = await promise3();

//     console.log("Promise 1: ", promise1Handler);
//     console.log("Promise 2: ", promise2Handler);
//     console.log("Promise 3: ", promise3Handler);
//   } catch (error) {
//     console.log("Error: ", error);
//   }
// }

// promiseHandling();

async function allPromiseHandling() {
  try {
    // let handlingAllPromises = await Promise.all([
    //   promise1(),
    //   promise2(),
    //   promise3(),
    // ]);

    // let handlingAnyPromises = await Promise.any([
    //   promise1(),
    //   promise2(),
    //   promise3(),
    // ]);

    let handlingAllSettledPromises = await Promise.allSettled([
      promise1(),
      promise2(),
      promise3(),
    ]);

    // console.log("Handling all promises: ", handlingAllPromises);
    // console.log("Handling any promises: ", handlingAnyPromises);
    console.log("Handling allSettled promises: ", handlingAllSettledPromises);
  } catch (error) {
    console.log("Error: ", error);
  }
}

allPromiseHandling();
