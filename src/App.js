import { useEffect } from "react";
import Header from "./components/Header";
import { useDispatch, useSelector } from "react-redux";
import { getAllCapsules, getFilteredCapsules } from "./store/capsules-slice";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import Capsules from "./components/Capsules";

function App() {
  const dispatch = useDispatch();
  const toggleModal = useSelector((state) => state.modal.toggleModal);
  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/capsules", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(getAllCapsules(data));
        dispatch(getFilteredCapsules(data));
      });
  }, [dispatch]);
  return (
    <div className=" ">
      <Header />
      <Capsules />
      <Footer />
      {toggleModal ? (
        <div className=" flex items-center justify-center">
          <Modal />
        </div>
      ) : null}
    </div>
  );
}

export default App;
