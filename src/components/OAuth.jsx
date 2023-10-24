import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import Cookies from "js-cookie";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { app } from "../firebase";
import { signInSuccess } from "../redux/user/userSlice";
const OAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleSignIn = async () => {
    // window.open("http://localhost:3000/auth/google", "_self");
    try {
      //   console.log("ghk");
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);
      console.log(result);
      console.log(result.user.displayName);
      const res = await fetch("http://localhost:3000/google", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          username: result.user.displayName,
          email: result.user.email,
          avatar:
            result.user.photoURL ||
            "https://icons8.com/icon/492ILERveW8G/male-user",
        }),
      });
      const data = await res.json();
      const { token, rest } = data;
      dispatch(signInSuccess(rest));
      Cookies.set("access_token", token, { httpOnly: true });
      console.log(data);
      navigate("/");
    } catch (error) {
      console.log(console.error());
    }
  };
  return (
    <div className="flex justify-center items-center mt-3">
      <button
        onClick={handleGoogleSignIn}
        type="button"
        className="flex justify-center items-center text-white bg-lime-500 hover:bg-lime-600 w-[90%] lg:w-2/3 rounded-lg px-4 py-2">
        <FcGoogle className="mr-2 text-xl"></FcGoogle> Continue with Google
      </button>
    </div>
  );
};

export default OAuth;
