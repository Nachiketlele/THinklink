import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Siderbar from './components/Siderbar';
import Home from './pages/Home';

function App() {
  return (
    <div>
       <Navbar/>
       <div style={{display:"flex"}}>
       <Siderbar/>
       <Home/>
       </div>
    </div>
  );
}

export default App;
