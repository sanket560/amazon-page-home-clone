import './App.css';
import Navbar from './Components/Navbar';
import SubNavbar from './Components/SubNavbar';
import Home from './Components/Home';
import TodaysDeals from './Components/TodaysDeals';
import WomenWear from './Components/WomenWear';
import Signin from './Components/Signin';
import Subfooter from './Components/subfooter';
import Longfooter from './Components/Longfooter';
import ResponsiveComponent from './Components/ResponsiveComponent';
function App() {
  return (
    <>
      <Navbar />
      <SubNavbar />
      <Home />
      <TodaysDeals />
      <WomenWear />
      <Signin />
      <Subfooter/>
      <Longfooter />
      <ResponsiveComponent/>
    </>
  );
}


export default App;
