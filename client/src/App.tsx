import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Lobby } from "./pages/Lobby";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Lobby />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/signin" element={<Signin />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;