import logo from './logo.svg';
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import './App.css';
import MainPage from './MainPage';
import LoginPage from './LoginPage';
import DetailPage from './DetailPage';

function App() {
  console.log(process.env.PUBLIC_URL)
  return (
    <div className='App'>
      <div className='header-master'>
        <div className='header-container'>
          <div className='header-name'>
            <p>
              <a href={process.env.PUBLIC_URL} rel='home'>SOYEON KIM</a>
            </p>
          </div>
        </div>
      </div>
      <div className='content-master'>
        <ul className='content-category'>
          <li><Link to='/portfolio/web'>web</Link></li>
          <li><Link to='/portfolio/logo'>logo</Link></li>
          <li>babo</li>
          <li><Link to='/portfolio/brand'>brand</Link></li>
        </ul>
        <Routes>
          <Route path="/portfolio/web" element={<MainPage />} />
          <Route path="/portfolio/logo" element={<LoginPage />} />
          <Route path="/portfolio/detail" element={<DetailPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
