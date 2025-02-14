const user = () => {
  try {
    //start making scripts for user logo icon of icons section
    function icons(input1,input2,event,animation1,animation2,fadeIn,fadeOut,active) {
      input1.addEventListener(event, (e) => {
        e.target.firstElementChild.classList.remove(animation1);
        e.target.firstElementChild.classList.add(animation2);
        if (event == "mouseenter") {
          input2.classList.remove(fadeOut);
          input2.classList.add(active, fadeIn);
        } else if (event == "mouseleave") {
          input2.classList.remove(active, fadeIn);
          input2.classList.add(fadeOut);
        }
      });
    }
    let userLogo = document.querySelector(".userLogo");
    let userSubmenu = document.querySelector(".userSubmenu");
    icons(userLogo,userSubmenu,"mouseenter","rotateAngleDown","rotateAngleUp","fadeIn","fadeOut","active");
    icons(userLogo,userSubmenu,"mouseleave","rotateAngleUp","rotateAngleDown","fadeIn","fadeOut","active");
    //end of making scripts for user logo icon of icons section
  } catch (error) {
    console.log(error.message);
  }
};

export default user;
