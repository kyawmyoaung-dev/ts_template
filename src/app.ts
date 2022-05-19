import { user } from "./user";

let button = document.querySelector("button")!;
let result = document.querySelector("p")!;

let _user: user = { name: "kyaw myo aung", age: 16, job : 'developer' };

button.addEventListener(
  "click",
  () =>
    (result.innerHTML = `user name is ${_user.name} and age is ${_user.age}. I am ${_user.job}`)
);