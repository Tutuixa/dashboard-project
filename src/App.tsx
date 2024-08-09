import { Route, Routes } from "react-router-dom";
import { Login } from "./Login/Login";
import { Dashboard } from "./Dashboard/Dashboard";

export function App() {
  return (  
   <Routes>
    <Route path="/" element={<Login/>}></Route>
    <Route path="/Dashboard" element={<Dashboard/>}></Route>
   </Routes>
  )
}