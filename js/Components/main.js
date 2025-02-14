import Button from "./Main/button.js";
import Car from "./Main/car.js";
import Leasing from "./Main/leasing.js";
import Collapse from "./Main/textCollapse.js";
const Main = () => {
  try {
    //Start making scripts for swiper
    var swiper = new Swiper(".mySwiper", {
      freeMode: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        520: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        950: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    });
    //End of making scripts for swiper
    Leasing()
    Car();
    Button();
    Collapse();
  } catch (error) {
    console.log(error.message);
  }
};

export default Main;
