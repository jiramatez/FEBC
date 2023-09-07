const divMain = document.getElementById("main");

let h1Element = document.createElement("h1");
h1Element.textContent = "🚨 Danger";
h1Element.classList.add("bg-red-100");
h1Element.classList.add("text-center");

divMain.appendChild(h1Element);

function changeColor() {
  document.getElementById("changeHere").style.color = "red";
}

function addElement() {
  let newElement = document.createElement("p");
  newElement.innerHTML = "New element!";
  document.getElementById("main").appendChild(newElement);
}

function validateForm() {
  let email = document.getElementById("email").value;
  if (email === "") {
    alert("Email field cannot be empty");
    return false;
  } else if (!email.includes("@")) {
    alert("Invalid email format");
    return false;
  }
  return true;
}

function calculateSum() {
  let number1 = parseInt(document.getElementById("number1").value);
  let number2 = parseInt(document.getElementById("number2").value);
  let sum = number1 + number2;
  document.getElementById("result").innerHTML = "Result: " + sum;
}

//////////////////////////////////////////////
//////////////////////////////////////////////

class Tiger {
  constructor(name, age, weight) {
    this.name = name; //Property
    this.age = age; //Property
    this.weight = weight; //Property
  }

  roar() {
    //Method
    console.log(`${this.name} roars!`);
  }

  eat(pounds) {
    //Method
    this.weight += pounds;
    console.log(`${this.name} eats ${pounds} pounds of food.`);
  }

  showWeight() {
    console.log(`Now ${this.name} has ${this.weight} KG.`);
  }

  exerciseHour(hours) {
    this.weight -= hours;
    this.showWeight();
  }

  sayHello() {
    console.log(`Hello + ${this.name} your weight ${this.weight}`);
  }
}

const snow = new Tiger("Snow", 5, 10);
const winter = new Tiger("Snow", 4, 20);

let tigerName = [];

// for (let i = 0; i <= 10; i++) {
//   tigerName.push(new Tiger("SW" + i, i, i));
// }
// console.log(tigerName);

// tigerName[0].eat(10);
// tigerName[0].roar();

for (let i = 0; i <= 10; i++) {
  tigerName.push(new Tiger("SW" + i, i, i));
}
console.log(tigerName);

for (let tigerName of tigerName) {
  tigerName.sayHello();
}
