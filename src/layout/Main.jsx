import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="max-w-screen-2xl">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
