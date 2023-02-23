// import logo from './logo.svg';
import './App.css';
import Navbar1 from './components/NavBar1';
import Navbar2 from './components/NavBar2';
import AllRoutes from "./components/AllRoutes"
// import Footer1 from './components/Footer1';
// import Footer2 from './components/Footer2';
import LargeWithAppLinksAndSocial from './components/Footer1'




function App() {
  return (
    <div className="App">
  <Navbar1/>
  
   <Navbar2/>
   <AllRoutes/>
<LargeWithAppLinksAndSocial/>
  
    </div>
  );
}

export default App;
