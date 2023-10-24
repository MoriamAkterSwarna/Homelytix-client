import Lottie from "lottie-react";
import { useSelector } from "react-redux";
import userLottie from "../../assets/Animation - 1698140892844.json";
import { UpdateProfileForm } from "../../components/UpdateProfileForm";
const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="mx-[5%] lg:mx-[10%]">
      <h1 className="text-4xl font-bold text-center">
        Hello There!{" "}
        <span className="text-blue-600">{currentUser?.username}</span>
      </h1>

      <div className="flex flex-col lg:flex-row mt-10">
        <div className="bg-blue-100 w-full lg:w-[30%] mr-[5%] p-6 text-center rounded-2xl">
          <img
            className="mx-auto mt-6 rounded-full"
            src={currentUser?.avatar}
            alt={currentUser?.username}
          />
          <h2 className="text-2xl font-semibold my-4">
            {currentUser?.username}
          </h2>
          <p className="text-lg">Email: {currentUser?.email}</p>

          <div className="w-[90%] mt-3">
            <Lottie animationData={userLottie} loop={true} />
          </div>
        </div>
        <div className=" bg-sky-100 rounded-2xl w-full lg:w-[70%] mt-10 lg:mt-0">
          <UpdateProfileForm />
        </div>
      </div>
    </div>
  );
};

export default Profile;
