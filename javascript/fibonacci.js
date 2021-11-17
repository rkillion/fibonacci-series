function fibonacci(num) {
  // type your code here
  const fibonacci = [0,1];
  if (num>=0&&num<2) {
    return fibonacci[num];
  }
  for (let i=2;i<=num;i++) {
    let nextNum = fibonacci[i-2]+fibonacci[i-1];
    if (i===num) {
      return nextNum;
    } else {
      fibonacci.push(nextNum);
    }
  }
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
