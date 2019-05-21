var animal = 'dog';

function myAnimal(yourAnimal) {
    return animal;
}

function yourAnimal(myAnimal) {
  var animal = 'cat';
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal;
}

function add2(n) {
  const two = n;
  return n + 2;
}

function funkyFunction (theFunk) {
  var theFunk = "FUNKY!";
    return funkyFunction;
}


// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.

funkyFunction;
 
