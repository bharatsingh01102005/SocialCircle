import { Route, Routes } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
export const serverUrl = "http://localhost:8000";
function App() {
  return (
    <Routes>
      <Route path='/' element={<SignUp />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/signin' element={<SignIn />} />
    </Routes>
  );
}

export default App