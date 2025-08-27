import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/cb72daa5-bd8d-408b-b949-1eaef000c377/web/IN-en-20250825-TRIFECTA-perspective_a3209894-0b01-4ddb-b57e-f32165e20a3f_medium.jpg"
          alt="BackgroundImage"
        />
      </div>
      <form
        className=" w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white opacity-80"
        action="
      "
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignForm && (
          <input
            type="text"
            placeholder=" Full Name"
            className="p-4 my-4 w-full bg-gray-800 "
            value=""
          />
        )}
        <input
          type="text"
          placeholder="Email Address "
          className="p-4 my-4 w-full bg-gray-800 "
          value=""
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-800 "
          value=""
        />
        <button className="p-4 my-6 bg-red-700 text-white w-full rounded-lg cursor-pointer">
          {isSignForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignForm
            ? "New to netflix? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};
export default Login;
