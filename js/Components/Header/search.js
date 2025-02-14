const search = () => {
  try {
    //start making scripts for closing search box
    let searchIcon = document.querySelector(".search");
    let searchBox = document.querySelector(".searchBox");
    let closeBtn = document.querySelector(".fa-times-circle-o");
    let closeSearchBox = document.querySelector(".closeSearchBox");

    searchIcon.addEventListener("click", (e) => {
      if (
        e.target.parentElement.classList.contains("checked") &&
        e.target.firstElementChild
      ) {
        searchBox.classList.remove("fadeOut");
        searchBox.classList.add("active", "fadeIn");
        closeSearchBox.classList.remove("fadeOut");
        closeSearchBox.classList.add("active", "fadeIn");
      }
    });
    closeBtn.addEventListener("click", () => {
      searchBox.classList.remove("active", "fadeIn");
      searchBox.classList.add("fadeOut");
      closeSearchBox.classList.remove("active", "fadeIn");
      closeSearchBox.classList.add("fadeOut");
    });
    closeSearchBox.addEventListener("click", (e) => {
      searchBox.classList.remove("active", "fadeIn");
      searchBox.classList.add("fadeOut");
      e.target.classList.remove("active", "fadeIn");
      e.target.classList.add("fadeOut");
    });
    //end of making scripts for closing search box
  } catch (error) {
    console.log(error.message);
  }
};

export default search;
