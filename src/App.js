import Navbar from "./Components/Navbar";
import "./App.css";
import MainRoutes from "./Components/MainRoutes";
import Admindashboard from './Components/AdminDashboard';
import Adminsidebar from './Components/AdminSideBar';
import Admin from './Pages/Admin.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />
    </div>
  );
}

export default App;
