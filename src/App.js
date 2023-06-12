
import './App.css';
import Home from './pages/home/Home.jsx';
import Login from './pages/login/Login';
import Profile from './components/profile/Profile';
import Register from './pages/register/Register';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/profile/:username" element={<Profile />}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
