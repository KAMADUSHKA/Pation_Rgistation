import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Register from './pagers/Register';
import Login from './pagers/Login';
// import Dashbord from './pagers/Dashbord';
import Dboard from './pagers/Dboard';


function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Register/>}
            />
            <Route
            path='/Login'
            element={<Login/>}
            />
            <Route
            path='/Dboard'
            element={<Dboard/>}
            />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
