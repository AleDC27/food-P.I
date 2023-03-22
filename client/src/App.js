import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { LandingPage } from "./Components/Landing Page/LandingPage.jsx";
import {Home} from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Nav";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" ? <Navbar /> : null}
      <Routes>
        <Route path={"/"} element={<LandingPage />} />
        <Route path={"/home"} element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
