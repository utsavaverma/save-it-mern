//The root component which handles the navigation of pages and the flow of the application.

import { Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Recycle from "./Components/Recycle";
import RestaurantFood from "./Components/RestaurantFood";
import Registration from "./Components/Registration";
import Login from "./Components/Login";
import Donate from "./Components/Donate";
import RestaurantOTP from "./Components/RestaurantOTP";
import Home from "./Components/Home";
import NgoFeature from "./Components/NgoFeature";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/recycle" element={<Recycle />} />
        <Route path="/checkOtp" element={<RestaurantOTP />} />

        <Route path="/restaurantfood" element={<RestaurantFood />} />
        <Route path="/ngo" element={<NgoFeature />} />

        <Route path="/register" element={<Registration />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/donate" element={<Donate />} />
      </Routes>
    </div>
  );
}

export default App;
