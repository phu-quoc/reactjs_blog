// import Home from "./pages/home/Home";
// import Single from "./pages/single/Single";
// import TopBar from "./components/topbar/TopBar";
// import Write from "./pages/write/Write";
// import Settings from "./pages/settings/Settings";
// import Login from "./pages/login/Login";
// import Register from "./pages/register/Register";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  const user = false;
  return (
    <Router>
      {/*<TopBar />*/}
      {/*<Routes>*/}
      {/*  <Route exact path='/' element={<Home />} />*/}
      {/*</Routes>*/}
      {/*<Routes>*/}
      {/*  <Route path='/register' element={ user ? <Home /> : <Register />} />*/}
      {/*</Routes>*/}
      {/*<Routes>*/}
      {/*  <Route path='/login' element={ user ? <Home /> : <Login />} />*/}
      {/*</Routes>*/}
      {/*<Routes>*/}
      {/*  <Route path='/write' element={ user ? <Write /> : <Login />} />*/}
      {/*</Routes>*/}
      {/*<Routes>*/}
      {/*  <Route path='/settings' element={ user ? <Settings /> : <Login />} />*/}
      {/*</Routes>*/}
      {/*<Routes>*/}
      {/*  <Route path='/post/:slug' element={<Single />} />*/}
      {/*</Routes>*/}
    </Router>
  );
}

export default App;
