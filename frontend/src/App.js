import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing/Landing';
import Menu from './pages/menu/Menu';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path={process.env.PUBLIC_URL + '/'} element={<Landing />} />
            <Route path={process.env.PUBLIC_URL + '/menu'} element={<Menu />} />
            {/*<Route path={process.env.PUBLIC_URL + '/about'} element={<Landing />} />
          <Route path={process.env.PUBLIC_URL + '/gallery'} element={<Images />} /> */}
          </Routes>
        </div>
      </Router >

    </div>
  );
}

export default App;
