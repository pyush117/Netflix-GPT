import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  // console.log(user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        // Sign-out successful.
        
      })
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {
        navigate("/error");

        // An error happened.
      });
  };
  return (
    <div className="absolute w-screen px-8 py-3 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src="https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460"
        alt="Netflix-logo"
      />
      {user && (
        <div className="flex p-2">
          <img className="w-12 h-12" src={user?.photoURL} alt="user-icon" />
          <button
            onClick={handleSignOut}
            className=" font-bold text-white mx-2"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
