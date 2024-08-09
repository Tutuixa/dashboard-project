import { Route, Routes } from "react-router-dom";
import { Login } from "./Login/Login";

export function App() {
  return (  
   <Routes>
    <Route path="/" element={<Login/>}></Route>
   </Routes>
  )
}