
import './App.css';
import NavBar from './components/shared/NavBar';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/shared/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import NoMatch from './components/shared/NoMatch';
import FetchUser from './components/shared/FetchUser';
import ProtectedRoute from './components/auth/ProtectRoute';
import About from './components/Pages/About';
import Profile from './components/Pages/Profile';
import Themes from './components/Pages/Themes';
import RoomShow from './components/Pages/RoomShow';

function App() {
  return (
    <div className="App">
      <NavBar />
      
        <FetchUser>
      <>
          <Routes>
            {/* Unprotected */}
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
            
            <Route element={<ProtectedRoute/>}>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/themes' element={<Themes/>}/>
              <Route path='/rooms/:id' element={<RoomShow/>}/>

              
              
           </Route>
                <Route path='*' element={<NoMatch />} />
          </Routes>
      </>
          </FetchUser>
    </div>
  );
}

export default App;
