// 1. Select elements
const carsList = document.querySelector('.cars-list');
const brand = document.querySelector("#brand");
const model = document.querySelector("#model");
const owner = document.querySelector("#owner");
const plate = document.querySelector("#plate");

const displayCars = (cars) => {
  carsList.innerHTML = "";
  cars.forEach((car) => {
    carsList.insertAdjacentHTML("beforeend",
      `<div class="car">
          <div class="car-image">
            <img src="http://loremflickr.com/280/280/${car.brand}${car.model}" />
          </div>
          <div class="car-info">
            <h4>${car.brand} ${car.model}</h4>
            <p><strong>Owner:</strong> ${car.owner}</p>
            <p><strong>Plate:</strong> ${car.plate}</p>
          </div>
        </div>`);
  });
};

const getCars = (garageName) => {
  // 3. Fetch the correct car from the garage APuIr
  fetch(`https://wagon-garage-api.herokuapp.com/${garageName}/cars`)
    .then(response => response.json())
    .then((data) => {
      // 4. Add the car's information to the list
      displayCars(data);
    });
};

const sendCars = (garageName) => {
  const url = `https://wagon-garage-api.herokuapp.com/${garageName}/cars`;
  const car = {
    brand: brand.value,
    model: model.value,
    owner: owner.value,
    plate: plate.value
  };
  fetch(
    url,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(car)
    }
  )
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      getCars(garageName);
    });
};

// 2. Listen to a click on "Add a car"
const addCar = (event) => {
  event.preventDefault();
  // 3. Send car data to API (POST)
  sendCars("le-wagon-drift");
};

// export default getCars;
export { getCars, addCar };
