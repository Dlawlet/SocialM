import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from"./pages/login/Login";
import Register from"./pages/register/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";

function App() {

  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route path="/" caseSensitive={false} element={user ? <Home /> : <Register/> } />
        <Route path="/profile/:username" caseSensitive={false} element={<Profile />} />
        <Route path="/login" caseSensitive={false} element={user ?  <Navigate to ="/" /> : <Login /> } />
        <Route path="/register" caseSensitive={false} element={user ?  <Navigate to ="/" /> :  <Register />} />
      </Routes>
    </Router>
  );
}

export default App;