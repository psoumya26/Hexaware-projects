

import { Route } from "react-router-dom";
import { Routes ,NavLink, nav } from 'react-router-dom';
import Home from './components/Home'
import Login from './components/Login';
import Register from './components/Register';
import StudentDetails from './components/StudentDetails';
import StudentFees from './components/StudentFees';
import ReportBehavior from './components/ReportBehavior';
import Thankyou from './components/Thankyou';


function App() {
  return (
    <div className="App">     
      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="login" element={<Login/>}/>
        <Route path="studentfees" element={<StudentFees/>}/>
        <Route path="studentdetails" element={<StudentDetails/>}/>
        <Route path="reportbehavior" element={<ReportBehavior/>}/>
        <Route path="Thankyou" element={<Thankyou/>}/>
        <Route path="register" element={<Register/>}></Route>
        </Routes>
    </div>
  );
}

export default App;