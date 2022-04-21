import React, {useEffect} from "react";
import { Routes, Route} from "react-router-dom"
import { useDispatch } from "react-redux";

import { getAuthUser } from "./JS/actions/authActions";

import AuthNavbar from './pages/AuthNavbar';
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import PrivateRoute from "./components/PrivateRoute";
import NotFound from "./pages/NotFound";
import "./App.css"


function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getAuthUser())
    //eslint-disable-next-line
  },[])

  return (
    <div>
      <AuthNavbar />
        <Routes>
          <Route path="/"  element={ <Home /> } />
          <Route path="/dashboard" element={<PrivateRoute> <Dashboard />  </PrivateRoute>} /> *
          <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
  );
}

export default App;
