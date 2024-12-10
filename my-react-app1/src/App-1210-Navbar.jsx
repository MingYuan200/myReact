import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";


export default function App() {
  return (
    <div className="wrap">
      <Navbar />

      <hr />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/About" element={<About/>}></Route>
      </Routes>
    </div>
  )
}