import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useToasts } from "react-toast-notifications";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // console.log(errors);
  // const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { addToast } = useToasts();
  const onSubmit = async (data) => {
    console.log(data);
    if (data.password === data.ConfirmPassword) {
      const username = data.name;
      const email = data.email;
      const password = data.password;
      console.log(username, email, password);
      const newData = {
        username,
        email,
        password,
      };
      // setLoading(true);
      const res = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          // "authorization": "token",
        },
        body: JSON.stringify(newData),
      });
      const dt = await res.json();
      console.log(dt);
      if (dt.insertedId) {
        // setLoading(false);
        addToast("User Added Successfully!!", {
          appearance: "success",
          autoDismiss: true,
        });
        navigate("/signIn");
      } else {
        // setLoading(false);
        // console.log(loading);
        console.log(error);
        setError(dt.message);
        addToast("user not found", {
          appearance: "error",
          autoDismiss: true,
        });
      }
    }
  };
  return (
    <div className="hero h-[80vh] lg:min-h-screen bg-opacity-90 relative glass-body">
      <div className="hero-content flex-col">
        <div className="text-center  ">
          <h1 className="text-4xl font-bold text-gray-800 pt-6">Sign up</h1>
        </div>
        <div className="card w-[35%] shadow-2xl glass-card my-10 mx-auto p-6">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card-body mt-2 py-4">
            <div className="form-control flex items-center justify-center">
              <input
                type="text"
                {...register("name", { required: true })}
                name="name"
                placeholder="Name"
                className="input input-bordered p-2 m-2 w-[90%] lg:w-2/3 rounded-sm bg-slate-200 text-gray-800 "
                style={{ outline: "none" }}
              />
              {/* {errors.name && (
                <span className="text-red-500">Name is required</span>
              )} */}
            </div>

            <div className="form-control flex items-center justify-center">
              <input
                type="email"
                {...register("email", { required: true })}
                name="email"
                placeholder="email"
                className="input input-bordered p-2 m-2 w-[90%] lg:w-2/3 rounded-sm bg-slate-200 text-gray-800 "
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
                className="input input-bordered p-2 m-2 w-[90%] lg:w-2/3 rounded-sm bg-slate-200 text-gray-800 "
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
            <div className="form-control flex items-center justify-center">
              <input
                className="input input-bordered p-2 m-2 w-[90%] lg:w-2/3 rounded-sm bg-slate-200 text-gray-800 "
                style={{ outline: "none" }}
                type="password"
                {...register("ConfirmPassword", { required: true })}
                placeholder="Confirm Password"
              />
              {/* {errors.email && (
                <span className="text-red-500">
                  Password and Confirm Password should be same
                </span>
              )} */}
            </div>

            <div className="form-control mt-6 flex items-center justify-center">
              <input
                className="btn w-[90%] lg:w-2/3 rounded-lg bg-blue-500 px-4 py-2 border-none hover:bg-blue-700 text-white"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>

          <p className="text-white mx-auto text-center mb-8">
            <small>
              Already have an account?{" "}
              <Link to="/signIn" className="text-gray-950">
                Login
              </Link>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
