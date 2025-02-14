const Button = () => {
  try {
    let twelve = document.querySelector(".twelve");
    let twentyFour = document.querySelector(".twentyFour");
    let thirtySix = document.querySelector(".thirtySix");
    let btn = [...document.querySelectorAll(".btnSelect")];
    btn.forEach((elem) => {
      elem.addEventListener("click", (e) => {
        if (e.target.classList.contains("twelve")) {
          twelve.classList.add("activeButton");
          twentyFour.classList.remove("activeButton");
          thirtySix.classList.remove("activeButton");
        } else if (e.target.classList.contains("twentyFour")) {
          twentyFour.classList.add("activeButton");
          twelve.classList.remove("activeButton");
          thirtySix.classList.remove("activeButton");
        } else if (e.target.classList.contains("thirtySix")) {
          thirtySix.classList.add("activeButton");
          twentyFour.classList.remove("activeButton");
          twelve.classList.remove("activeButton");
        }
      });
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default Button;
