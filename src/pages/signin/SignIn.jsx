import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import {
  signInFailure,
  signInStart,
  signInSuccess,
} from "../../redux/user/userSlice";
const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // console.log(errors);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  const { loading, error } = useSelector((state) => state.user);
  console.log(loading);
  const navigate = useNavigate();
  const { addToast } = useToasts();

  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    console.log(data);

    const email = data.email;
    const password = data.password;
    console.log(email, password);
    const newData = {
      email,
      password,
    };
    // setLoading(true);
    dispatch(signInStart());
    const res = await fetch("http://localhost:3000/signin", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newData),
    });
    const dt = await res.json();
    console.log(dt);
    const { token, rest } = dt;
    Cookies.set("access_token", token, { httpOnly: true });
    // console.log(dt);
    if (rest?.username) {
      // setLoading(false);
      addToast("User Login Successfully!!", {
        appearance: "success",
        autoDismiss: true,
      });
      dispatch(signInSuccess(rest));
      navigate("/");
    } else {
      // setLoading(false);
      // console.log(loading);
      console.log(error);
      // setError(dt.message);
      dispatch(signInFailure(dt.error));
      addToast("User not found", {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };

  return (
    <div className="hero h-[80vh] lg:min-h-screen bg-opacity-90 relative glass-body">
      <div className="hero-content flex-col">
        <div className="text-center  ">
          <h1 className="text-4xl font-bold text-gray-800 pt-6">Sign in</h1>
        </div>
        <div className="card w-[35%] shadow-2xl glass-card my-10 mx-auto p-6">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card-body mt-2 py-4">
            <div className="form-control flex items-center justify-center">
              <input
                type="email"
                {...register("email", { required: true })}
                name="email"
                placeholder="email"
                className="input input-bordered p-3 m-2 w-[90%] lg:w-2/3 rounded-sm bg-slate-200 text-gray-800 "
                style={{ outline: "none" }}
              />
              {errors.email && (
                <span className="text-red-500">Email is required</span>
              )}
            </div>
            <div className="form-control flex items-center justify-center">
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  // pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/,
                })}
                name="password"
                placeholder="password"
                className="input input-bordered p-3 m-2 w-[90%] lg:w-2/3 rounded-sm bg-slate-200 text-gray-800 "
                style={{ outline: "none" }}
              />
              {/* {errors.password?.type === "required" && (
                <p className="text-red-500">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-500">Password must be 6 characters</p>
              )} */}

              {/* {errors.password?.type === "pattern" && (
                <p className="text-red-500">
                  Password must have one Uppercase one and one special
                  character.
                </p>
              )} */}
            </div>

            <div className="form-control mt-6 flex items-center justify-center">
              <input
                className="btn w-[90%] lg:w-2/3 rounded-lg bg-blue-500 px-4 py-2 border-none hover:bg-blue-700 text-white"
                type="submit"
                value="Sign In"
              />
            </div>
          </form>

          <p className="text-white mx-auto text-center mb-8">
            <small>
              Don&rsquo;t have an account?{" "}
              <Link to="/signUp" className="text-gray-950">
                SignUp
              </Link>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
