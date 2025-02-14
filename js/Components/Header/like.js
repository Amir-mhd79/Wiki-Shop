const like = () => {
  try {
    //strat making scripts for like icon of icons section
    let like = document.querySelector(".heart");
    let heart = document.querySelector(".fa-heart");
    like.addEventListener("click", (e) => {
      e.target.style.display = "none";
      e.target.previousElementSibling.style.display = "block";
    });
    heart.addEventListener("click", (e) => {
      e.target.style.display = "none";
      e.target.nextElementSibling.style.display = "block";
    });
    //end of making scripts for like icon of icons section
  } catch (error) {
    console.log(error.message);
  }
};

export default like;
