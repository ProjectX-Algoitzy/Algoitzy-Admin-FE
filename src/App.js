import { BrowserRouter, Route, Routes } from "react-router-dom" 
import Home from "./APP/sharing-pages/Home"
import Login from "./APP/sharing-pages/Login"
import Header from "./APP/components/Header"
import MakingApplicationForm from "./APP/admin-pages/MakingApplicationForm"
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
