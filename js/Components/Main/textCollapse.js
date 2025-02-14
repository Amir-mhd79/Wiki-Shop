const Collapse = () => {
  try {
    let needItems = document.querySelector(".textTitle");
    let subNeed = document.querySelector(".subNeed");
    let caretUp = document.querySelector(".beBala");
    let flag = true;
    needItems.addEventListener("click", (e) => {
      if (flag) {
        subNeed.classList.add("showText");
        caretUp.classList.remove("rotateAngleDown");
        caretUp.classList.add("rotateAngleUp");
        flag = false;
      } else {
        subNeed.classList.remove("showText");
        caretUp.classList.remove("rotateAngleUp");
        caretUp.classList.add("rotateAngleDown");
        flag = true;
      }
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default Collapse;
