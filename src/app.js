import { getCars, addCar } from './car';
// import { getCars } from './car';

// TODO: give a badass name to your garage
const myBadAssGarage = "le-wagon-drift";

// DON'T CHANGE THIS LINE
document.querySelector("#garage-name").innerText = myBadAssGarage.replace(/-/g, " ");
// //////////////////////

// Display initial car list
getCars(myBadAssGarage);

// Add a new car
const submitBtn = document.querySelector("#submit-btn");
submitBtn.addEventListener("click", addCar);
