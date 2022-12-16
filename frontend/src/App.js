import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Customise from './pages/Custom/Custom';
import Landing from './pages/Landing/Landing';
import Login from './pages/Login-Reg/Login';
import Register from './pages/Login-Reg/Register';
import Menu from './pages/menu/Menu';
import 'notyf/notyf.min.css'; // for React, Vue and Svelte
import Profile from './pages/Profile/Profile';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path={process.env.PUBLIC_URL + '/'} element={<Landing />} />
            <Route path={process.env.PUBLIC_URL + '/menu'} element={<Menu />} />
            <Route path={process.env.PUBLIC_URL + '/workshop'} element={<Customise />} />
            <Route path={process.env.PUBLIC_URL + '/login'} element={<Login />} />
            <Route path={process.env.PUBLIC_URL + '/reg'} element={<Register />} />
            <Route path={process.env.PUBLIC_URL + '/profile'} element={<Profile />} />
          {/*<Route path={process.env.PUBLIC_URL + '/gallery'} element={<Images />} /> */}
          </Routes>
        </div>
      </Router >

    </div>
  );
}

export default App;
