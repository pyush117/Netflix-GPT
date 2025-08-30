import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch} from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  // console.log(user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.  
      })
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {
        navigate("/error");

        // An error happened.
      });
  };
  useEffect(() => {
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName,photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL:photoURL }));
        navigate("/browse");
  

        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribe when component unmounts
    return ()=>unsubscribe();
  }, []);
  return (
    <div className="absolute w-screen px-8 py-3 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src={LOGO}
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
