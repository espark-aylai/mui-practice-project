import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import SignInForm from "./components/SignInForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin-form" element={<SignInForm/>} />
      
      </Routes>
    </Router>
  );
}

export default App;
