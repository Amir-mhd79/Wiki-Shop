import like from "./Header/like.js";
import Navigation from "./Header/navigation.js";
import search from "./Header/search.js";
import user from "./Header/user.js";

const Header = () => {
  try {
    Navigation();
    user();
    like();
    search()
  } catch (error) {
    console.log(error.message);
  }
};
export default Header;
