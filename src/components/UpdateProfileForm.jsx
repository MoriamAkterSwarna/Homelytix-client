import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { app } from "../firebase";
export const UpdateProfileForm = () => {
  const {
    register,
    // handleSubmit,
    formState: { errors },
  } = useForm();
  const fileRef = useRef(null);
  const [file, setFile] = useState(undefined);
  const [filePerc, setFilePerc] = useState(0);
  const [fileErr, setFileErr] = useState(false);
  const [formData, setFormData] = useState({});
  // console.log(file);
  // console.log(filePerc);
  // console.log(formData);
  // console.log(fileErr);
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);
  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        // console.log(progress);
        // console.log("Upload is " + progress + "% done");
        setFilePerc(Math.round(progress));
      },
      (error) => {
        setFileErr(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          // setFile(downloadURL);
          setFormData({ ...formData, avatar: downloadURL });
        });
      }
    );
  };

  return (
    <div className="hero bg-opacity-90 relative">
      <div className="hero-content flex-col">
        <div className="text-center  ">
          <h1 className="text-3xl font-bold text-gray-800 pt-6">
            Update Profile
          </h1>
        </div>
        <div className="card w-[90%] lg:w-1/2 shadow-2xl glass-card my-4 mx-auto p-6">
          <form
            // onSubmit={handleSubmit(onSubmit)}
            className="card-body mt-2 px-4">
            <div>
              <input
                onChange={(e) => setFile(e.target.files[0])}
                type="file"
                ref={fileRef}
                hidden
                accept="image/*"
              />
              <img
                onClick={() => fileRef.current.click()}
                className="mx-auto w-12 h-12 rounded-full cursor-pointer"
                src={formData?.avatar || currentUser?.avatar}
                alt={currentUser?.username}
              />
              <p className="text-center">
                {fileErr ? (
                  <span className="text-red-700">Error Image upload</span>
                ) : filePerc > 0 && filePerc < 100 ? (
                  <span className="text-slate-700">{`Uploading ${filePerc}%`}</span>
                ) : filePerc === 100 ? (
                  <span className="text-green-700">
                    Image successfully uploaded!
                  </span>
                ) : (
                  ""
                )}
              </p>
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
