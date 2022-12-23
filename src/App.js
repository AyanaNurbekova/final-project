import Navbar from './components/Navbar/Navbar';
import MainRoutes from './components/routes/MainRoutes';
import Footer from './components/Footer/Footer';
import './components/Navbar/Navbar.css';
import './index.css'


function App() {
  return (
    <div>
    <Navbar/>
    <MainRoutes/>
    <Footer/>
    </div>
  );
}

export default App;
