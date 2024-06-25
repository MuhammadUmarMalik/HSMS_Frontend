import { Route, Routes } from "react-router-dom";
import Login from "./screens/login/Login";
import SignupPage from "./screens/signup/SignUp";
import HomePage from "./screens/admin/home/Home";
import AIStyles from "./screens/customer/aiStyles/AIStyles";
import BarbersProfile from "./screens/customer/Barber'sProfile/BarbersProfile";
import Services from "./screens/customer/Services/Services";
import AppointmentPage from "./screens/customer/appointnment/Appointment";
import HairStyles from "./screens/customer/hairStyles/HairStyles";
import BarberPage from "./screens/admin/barber/Barber";
import Barbers from "./screens/Barber/Barbers";
import Dashboard from "./screens/Barber/Dashboard/Dashboard";
import BarberHeader from "./components/headers/BarberHeader.js/BarberHeader";
import Profile from "./screens/Barber/Profile/Profile";
import Appointments from "./screens/Barber/Appointments/Appointments";
import Contact from "./screens/Barber/Contact/Contact";
import Reviews from "./screens/customer/Reviews/Reviews";
import CustomerHeader from "./components/headers/customer-header/CustomerHeader";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignupPage />} />

        {
          // customer routes
          <>
            {/* <Route path="customer" element={<CustomerHeader />} /> */}
            <Route path="/customer/home" element={<HomePage />} />
            <Route path="/customer/aIStyles" element={<AIStyles />} />
            <Route path="/customer/services" element={<Services />} />
            <Route path="/customer/profile" element={<BarbersProfile />} />
            <Route path="/customer/hair-style" element={<HairStyles />} />
            <Route path="/customer/reviews" element={<Reviews />} />
          </>
        }
        <Route path="/barber" element={<BarberPage />} />
        {/* add barbers for admin*/}
        <Route path="appointment" element={<AppointmentPage />} />
        <Route path="barbers" element={<BarberHeader />}>
          <Route path="/barbers/home" element={<Barbers />} />
          <Route path="/barbers/dashboard" element={<Dashboard />} />
          <Route path="/barbers/profile" element={<Profile />} />
          <Route path="/barbers/appointments" element={<Appointments />} />
          <Route path="/barbers/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
