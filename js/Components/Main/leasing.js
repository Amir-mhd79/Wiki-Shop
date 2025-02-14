const Leasing = () => {
  try {
    let slides = [...document.querySelectorAll(".swiper-slide")];
    let vasepariAfam = document.querySelector(".vasepariAfam");
    let farazAndishan = document.querySelector(".farazAndishan");
    let bankGardeshgari = document.querySelector(".bankGardeshgari");
    let vasepariFarda = document.querySelector(".vasepariFarda");
    let vasepariPasFarda = document.querySelector(".vasepariPasFarda");

    let subVasepariAfam = document.querySelector(".subVasepariAfam");
    let subFarazAndishan = document.querySelector(".subFarazAndishan");
    let subBankGardeshgari = document.querySelector(".subBankGardeshgari");
    let subVasepariFarda = document.querySelector(".subVasepariFarda");
    let subVasepariPasFarda = document.querySelector(".subVasepariPasFarda");
    function data(
      input1,
      input2,
      output1,
      output2,
      output3,
      output4,
      output5,
      output6,
      output7,
      output8
    ) {
      slides.forEach((elem) => {
        elem.addEventListener("click", (e) => {
          if (elem.classList.contains(input1)) {
            elem.classList.add("activeLeasing", "fadeIn");
            elem.lastElementChild.classList.add("active", "fadeIn");
            input2.classList.add("active");

            output1.classList.remove("activeLeasing", "fadeIn");
            output1.lastElementChild.classList.remove("active", "fadeIn");
            output5.classList.remove("active");

            output2.classList.remove("activeLeasing", "fadeIn");
            output2.lastElementChild.classList.remove("active", "fadeIn");
            output6.classList.remove("active");

            output3.classList.remove("activeLeasing", "fadeIn");
            output3.lastElementChild.classList.remove("active", "fadeIn");
            output7.classList.remove("active", "fadeIn");

            output4.classList.remove("activeLeasing", "fadeIn");
            output4.lastElementChild.classList.remove("active", "fadeIn");
            output8.classList.remove("active", "fadeIn");
          }
        });
      });
    }
    data(
      "vasepariAfam",
      subVasepariAfam,
      farazAndishan,
      bankGardeshgari,
      vasepariFarda,
      vasepariPasFarda,
      subFarazAndishan,
      subBankGardeshgari,
      subVasepariFarda,
      subVasepariPasFarda
    );
    data(
      "farazAndishan",
      subFarazAndishan,
      vasepariAfam,
      bankGardeshgari,
      vasepariFarda,
      vasepariPasFarda,
      subBankGardeshgari,
      subVasepariFarda,
      subVasepariPasFarda,
      subVasepariAfam
    );
    data(
      "bankGardeshgari",
      subBankGardeshgari,
      vasepariAfam,
      farazAndishan,
      vasepariFarda,
      vasepariPasFarda,
      subFarazAndishan,
      subVasepariFarda,
      subVasepariPasFarda,
      subVasepariAfam
    );
    data(
      "vasepariFarda",
      subVasepariFarda,
      vasepariAfam,
      farazAndishan,
      bankGardeshgari,
      vasepariPasFarda,
      subFarazAndishan,
      subBankGardeshgari,
      subVasepariPasFarda,
      subVasepariAfam
    );
    data(
      "vasepariPasFarda",
      subVasepariPasFarda,
      vasepariAfam,
      farazAndishan,
      bankGardeshgari,
      vasepariFarda,
      subFarazAndishan,
      subBankGardeshgari,
      subVasepariFarda,
      subVasepariAfam
    );
  } catch (error) {
    console.log(error.message);
  }
};

export default Leasing;
