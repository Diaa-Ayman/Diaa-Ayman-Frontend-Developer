import { useEffect } from "react";
import Header from "./components/Header";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/capsules", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, [dispatch]);
  return (
    <div className="">
      <Header />
    </div>
  );
}

export default App;
