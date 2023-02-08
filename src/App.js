import LoginPage from "./components/login";
import Signup from "./components/signup";
import Userdetail from "./components/userdetail";
import UserProfile from "./components/profile";
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/userdetail" element={<Userdetail/>}/>
        <Route path="/profile" element={<UserProfile/>}/>
      </Routes>
    </div>
  );
}

export default App;
