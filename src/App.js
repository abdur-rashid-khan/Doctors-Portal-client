import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Page/Home/Home';
import About from './Components/Page/About/About';
import Header from './Components/shared/Header/Header';
import Appointment from './Components/Page/Appointment/Appointment';
import Reviews from './Components/Page/Reviews/Reviews';
import Contact from './Components/Page/Contact/Contact';
import Login from './Components/Page/Login/Login';
import SignUp from './Components/Page/signUp/signUp';
import RequireAuth from './Components/Page/RequireAuth/RequireAuth';
import DashBoard from './Components/Page/DashBoard/DashBoard';
import MyAppointment from './Components/Page/DashBoard/MyAppointment/MyAppointment';
import MyReview from './Components/Page/DashBoard/MyReview/MyReview';
import TotalUser from './Components/Page/DashBoard/TotalUser/TotalUser';
import AdminChecking from './Components/Page/AdminChecking/AdminChecking';
import NoPageFound from './Components/Page/NoPageFound/NoPageFound';
import AddDoctor from './Components/Page/DashBoard/AddDoctors/AddDoctor';


function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/appointment" element={<RequireAuth>
          <Appointment></Appointment>
        </RequireAuth>} />
        <Route path="dashboard" element={<RequireAuth>
          <DashBoard />
        </RequireAuth>} >
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path='review' element={<MyReview></MyReview>}></Route>
          <Route path='total-user' element={
            <AdminChecking>
              <TotalUser></TotalUser>
            </AdminChecking>
          }></Route>
          <Route path='add-doctor' element={
            <AdminChecking>
              <AddDoctor></AddDoctor>
            </AdminChecking>
          }></Route>
        </Route>
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NoPageFound />} />
      </Routes>
    </>
  );
}

export default App;
