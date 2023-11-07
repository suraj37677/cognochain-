import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
import './App.css';
import Login from './components/Login';
import Registration from './components/Register';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';
import Themes from './components/Theme';
import Notifications from './components/Notification'; 
function App() {
  return (
    <div className="App">
   
        <Router>
      
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/registration">
          <Registration />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/themes">
          <Themes />
        </Route>
        <Route path="/notifications">
          <Notifications />
        </Route>
        
        <Route path="/notifications">
          <Profile />
        </Route>
        
    
    </Router>


    </div>
  );
}

export default App;
