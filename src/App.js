import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react"
import Loader from "./components/Loader";
import RequiredAuth from "./utils/RequiredAuth";

const Home = lazy(()=> import("./pages/Home"));
const Profile = lazy(()=> import("./pages/Profile"));
const SignIn = lazy(()=> import("./pages/SignIn"));
const SignUp = lazy(()=> import("./pages/SignUp"));

function App() {
  
  return (
    <Router>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/login" element={<SignIn/>}/>
          <Route path="/register" element={<SignUp/>}/>

          {/* authentication required */}
          <Route path="/" element={<RequiredAuth> <Home/> </RequiredAuth>}/>
          <Route path="/profile" element={<RequiredAuth> <Profile/> </RequiredAuth>}/>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
