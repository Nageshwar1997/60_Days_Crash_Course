function foo() {
  function cb(val) {
    console.log("In foo function we got the value from bar function", val);
  }

  bar(cb);
  return;
}

function bar(cbFunc) {
  let someValue = Math.random();
  console.log("In bar function value", someValue);
  cbFunc(someValue);
}

foo();
