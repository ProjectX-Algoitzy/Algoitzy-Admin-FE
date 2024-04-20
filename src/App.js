import { BrowserRouter, Route, Routes } from "react-router-dom" 
import Home from "./sharing-pages/Home"
import Login from "./sharing-pages/Login"
import Header from "./components/Header"
import MakingApplicationForm from "./admin-pages/MakingApplicationForm"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/makingapplicationform" element={<MakingApplicationForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
