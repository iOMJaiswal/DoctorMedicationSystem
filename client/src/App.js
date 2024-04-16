import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import DoctorLogin from "./components/DoctorLogin";
import Layout from "./components/Layout";
import PatientTable from "./components/PatientTable";
import RegisterDoctor from "./components/RegisterDoctor"; 
import AddPatient from "./components/AddPatient";
import ViewPatient from "./components/ViewPatient";
import ViewMedications from "./components/ViewMedications";
import EditPatient from "./components/EditPatient";
import AddMedications from "./components/AddMedications";
import EditMedication from "./components/EditMedication";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<DoctorLogin />} />
          <Route path="/register-doctor" element={<RegisterDoctor />} />
          <Route path="/logout" element={<Logout> <DoctorLogin /> </Logout>}/>

          <Route path="/" element={ <ProtectedRoute> <Layout> <PatientTable /> </Layout> </ProtectedRoute> } />    
          <Route path="/add-patient" element={ <ProtectedRoute> <Layout> <AddPatient/> </Layout> </ProtectedRoute> } />    
          <Route path="/viewPatient/:patient_id" element={ <ProtectedRoute> <Layout> <ViewPatient/> <ViewMedications/> </Layout> </ProtectedRoute> } />    
          <Route path="/editPatient/:patient_id" element={ <ProtectedRoute> <Layout> <EditPatient/></Layout> </ProtectedRoute> } />    
          <Route path="/addMedications/:patient_id" element={ <ProtectedRoute> <Layout> <AddMedications/></Layout> </ProtectedRoute> } />    
          <Route path="/editMedication/:medication_id" element={ <ProtectedRoute> <Layout> <EditMedication/></Layout> </ProtectedRoute> } />    
        </Routes>
      </BrowserRouter>
    </div>
  );

  
  function Logout({ children }) {
    const authToken = Cookies.get("auth_token");
    const doctor_id = Cookies.get("doctor_id");
    // console.log("auth token:", authToken);
    if (authToken) {
      Cookies.remove("auth_token");
      Cookies.remove("doctor_id");
    }
    return children;
  }

  function ProtectedRoute({ children }) {
    const authToken = Cookies.get("auth_token");
    console.log("auth token:", authToken);
    if (!authToken) {
      return <Navigate to="/login" replace />; // Redirect to Login on unauthorized access
    }

    return children;
  }
};



export default App;



