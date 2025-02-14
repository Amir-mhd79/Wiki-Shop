const Car = () => {
  try {
    let chooseCar = document.querySelector(".whichCar");
    let cars = document.querySelector(".entekhabKhodro");
    let closeCars = document.querySelector(".closeCar");
    let flag = true;

    chooseCar.addEventListener("click", (e) => {
      if (flag) {
        cars.classList.remove("fadeOut");
        cars.classList.add("active", "fadeIn");
        flag = false;
      }
    });
    closeCars.addEventListener("click", (e) => {
      if (flag == false) {
        cars.classList.remove("active", "fadeIn");
        cars.classList.add("fadeOut");
        flag = true;
      }
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default Car;
