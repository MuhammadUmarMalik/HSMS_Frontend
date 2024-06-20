import { Route, Routes } from "react-router-dom";
import Login from './screens/login/Login';
import SignupPage from "./screens/signup/SignUp";
import HomePage from "./screens/admin/home/Home";
import AppointmentPage from "./screens/customer/appointnment/Appointment";
import HairStyles from "./screens/customer/hairStyles/HairStyles";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="home" element={<HomePage />} />
        <Route path="appointment" element ={<AppointmentPage/>}/>
        <Route path="hair-style" element={<HairStyles/>}/>
      </Routes>
    </>
  );
}

export default App;
