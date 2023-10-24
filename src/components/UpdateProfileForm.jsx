import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useToasts } from "react-toast-notifications";

export const UpdateProfileForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const { addToast } = useToasts();
  const onSubmit = async (data) => {
    console.log(data);

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
      // console.log(error);
      // setError(dt.message);
      addToast("user not found", {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };
  return (
    <div className="hero bg-opacity-90 relative">
      <div className="hero-content flex-col">
        <div className="text-center  ">
          <h1 className="text-4xl font-bold text-gray-800 pt-6">
            Update Profile
          </h1>
        </div>
        <div className="card w-[90%] lg:w-1/2 shadow-2xl glass-card my-4 mx-auto p-6">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card-body mt-2 py-4">
            <div>
              <img
                className="mx-auto rounded-full cursor-pointer"
                src={currentUser?.avatar}
                alt={currentUser?.username}
              />
            </div>
            <div className="form-control flex items-center justify-center">
              <input
                type="text"
                {...register("name")}
                name="name"
                placeholder="Name"
                className="input input-bordered p-2 m-2 w-[90%] rounded-sm bg-slate-200 text-gray-800 "
                style={{ outline: "none" }}
              />
            </div>

            <div className="form-control flex items-center justify-center">
              <input
                type="email"
                {...register("email")}
                name="email"
                placeholder="email"
                className="input input-bordered p-2 m-2 w-[90%] rounded-sm bg-slate-200 text-gray-800 "
                style={{ outline: "none" }}
              />
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
                className="input input-bordered p-3 m-2 w-[90%] rounded-sm bg-slate-200 text-gray-800 "
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
                value="Update"
              />
            </div>
          </form>
          <div>
            <span className="text-rose-500">Delete Account</span>
          </div>
        </div>
      </div>
    </div>
  );
};
