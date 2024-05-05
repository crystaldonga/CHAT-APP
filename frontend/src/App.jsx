import {  Route, Routes,Navigate } from "react-router-dom";
import Login from "./pages/login/Login.jsx";
import SignUp from "./pages/signup/SignUp.jsx";
import Home from "./pages/home/Home.jsx";
import { useAuthContext } from "./context/AuthContext.jsx";
//import './App.css'

function App() {
  
  const { authUser } = useAuthContext();
  return (
    
    <div className='p-4 h-screen flex items-center justify-center'>
    <Routes>
   
				<Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
				<Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
				<Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />} />
			
			</Routes>
    </div>
  )
}

export default App
