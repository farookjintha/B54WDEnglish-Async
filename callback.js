function func1() {
  return "Happy Birthday!";
}

function func3() {
  return "Have a nice day";
}

function func2(callback) {
  let wishes = callback();
  //   func1();
  console.log(wishes);
}

func2(func1);
func2(func3);

// let myHandlerFunction = (value, inde) => {
//   //logic
// };

// Array.map(myHandlerFunction);

// Callback ->  used to handle Promise.
// Why Promise ->
