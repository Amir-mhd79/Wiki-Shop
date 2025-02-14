const Navigation=()=>{
  try {
    //start making submenu function
    function submenu(arrayName,fadeIn,fadeOut,active,insertClassName1,insertClassName2) {
      let flag = true;
      arrayName.forEach((elem) => {
        elem.addEventListener("click", (e) => {
          if (e.target.nextElementSibling && flag == true) {
            e.target.nextElementSibling.classList.remove(fadeOut);
            e.target.nextElementSibling.classList.add(active, fadeIn);
            e.target.firstElementChild.classList.add(insertClassName2);
            e.target.firstElementChild.classList.remove(insertClassName1);
            flag = false;
          } else {
            e.target.nextElementSibling.classList.remove(active, fadeIn);
            e.target.firstElementChild.classList.remove(insertClassName2);
            e.target.firstElementChild.classList.add(insertClassName1);
            e.target.nextElementSibling.classList.add(fadeOut);
            flag = true;
          }
        });
      });
    }
    //end of making submenu function

    //start making scripts for submenu of Header navigation
    let li = [...document.querySelectorAll(".containSubmenu")];
    submenu(li,"fadeIn","fadeOut","active","fa-caret-left","fa-caret-down");
    //end of making scripts for submenu of Header navigation

    //start making scripts for submenu of Header Responsive navigation
    let resLi = [...document.querySelectorAll(".resContainSubmenu")];
    submenu(resLi,"fadeIn","fadeOut","active","rotateAngleDown-2","rotateAngleLeft");
    //end of making scripts for submenu of Header Responsive navigation

    //start making scripts for open & close the Responsive navigation section 
    let bars=document.querySelector(".fa-bars")
    let flag = true;
    bars.addEventListener("click",(e)=>{
      if(flag){
        e.target.nextElementSibling.classList.remove("fadeOut")
        e.target.nextElementSibling.classList.add("active","fadeIn")
        e.target.className="fa fa-times"
        flag=false
      }else{
        e.target.nextElementSibling.classList.remove("active","fadeIn")
        e.target.nextElementSibling.classList.add("fadeOut")
        e.target.className="fa fa-bars"
        flag=true
      }
      
    })
    //end of making scripts for open & close the Responsive navigation section 
  } catch (error) {
    console.log(error.message);
  }
}
export default Navigation;
