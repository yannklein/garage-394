const carsList = document.querySelector(".cars-list");

const displayCar = (cars) => {
  cars.forEach((car) => {
    carsList.insertAdjacentHTML("beforeend", `
      <div class="car">
        <div class="car-image">
          <img src="http://loremflickr.com/280/280/${car.brand} ${car.model}" />
        </div>
        <div class="car-info">
          <h4>${car.brand} ${car.model}</h4>
          <p><strong>Owner: </strong>${car.owner}</p>
          <p><strong>Plate: </strong>${car.plate}</p>
        </div>
      </div>
      `);
  });
};

// fetch car list from API
const getCars = (myBadAssGarage) => {
  carsList.innerHTML = "";
  fetch(`https://wagon-garage-api.herokuapp.com/${myBadAssGarage}/cars`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      displayCar(data);
    });
};

const carInfo = () => {
  const car = {};
  car.brand = document.querySelector("#brand").value;
  car.model = document.querySelector("#model").value;
  car.plate = document.querySelector("#plate").value;
  car.owner = document.querySelector("#owner").value;
  return car;
};

const postCar = (car, garage) => {
  fetch(`https://wagon-garage-api.herokuapp.com/${garage}/cars`, {
    method: "POST",
    headers: { "Content-Type": 'application/json' },
    body: JSON.stringify(car)
  })
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      getCars(garage);
    });
};

export { getCars, postCar, carInfo };
