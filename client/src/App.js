import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { LandingPage } from "./Components/Landing Page/LandingPage.jsx";
import {Home} from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Nav";
import Detail from "./Components/Detail/Detail";
import CreateRecipe from "./Components/Create Recipe/CreateRecipe";
import About from "./Components/About/About";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" ? <Navbar /> : null}
      <Routes>
        <Route path={"/"} element={<LandingPage/>}/>
        <Route path={"/home"} element={<Home />}/>
        <Route path={"/detail/:id"} element={<Detail/>}/>
        <Route path={"about"} element={<About/>}/>
        <Route path={"/createRecipe"} element={<CreateRecipe/>}/>
      </Routes>
    </div>
  );
}

export default App;
