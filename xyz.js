//variable decleration
var x = "Mert";
var x = "Cafer"
x = "cef"

let y;
y="dang"
const z ="mofo";


function myFunction(name) {

  console.log(name);
}

//myFunction(x + x)

function mySecondFunc(callback, arg) {
  callback(arg)
}

//mySecondFunc(myFunction, x + x)

var myThirdFunc = function (arg) {
  return arg

}

var myFourthFunc = (arg) => {
  var deneme = myThirdFunc(arg)
  var deneme1 = myThirdFunc(arg)

  console.log(deneme + deneme1)

}
myFourthFunc("much")


module.exports = myFourthFunc



