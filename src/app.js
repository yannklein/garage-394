import { getCars, postCar, carInfo} from './car';

// TODO: give a badass name to your garage
const myBadAssGarage = "harry-hot-road";

// DON'T CHANGE THIS LINE
document.querySelector("#garage-name").innerText = myBadAssGarage.replace(/-/g, " ");
// //////////////////////


getCars(myBadAssGarage);
// take car(s) and put into the HTML

// POST
// select submit button and inputs
const submit = document.querySelector("#submit-btn");

// listen to click on submit button
submit.addEventListener("click", (event) => {
  event.preventDefault();
  postCar(carInfo(), myBadAssGarage);
});
// fetch info and post request
// refresh car list
