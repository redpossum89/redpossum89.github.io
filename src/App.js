import { Route, Routes } from 'react-router-dom';
import './App.css';
import PortfolioPage from './pages/PortfolioPage';
import DetailPage from './pages/DetailPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <div className='App'>
      <div className='header-master'>
        <div className='header-container'>
          <div className='header-name'>
            <p>
              <a href={process.env.PUBLIC_URL} rel='home'>
                SOYEON KIM
              </a>
            </p>
          </div>
          <div className='header-menu'>
            <p>
              <a href={process.env.PUBLIC_URL + '/about'} rel='home'>
                About
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className='content-master'>
        <Routes>
          <Route index path='/' element={<PortfolioPage />} />
          <Route path='/detail' element={<DetailPage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
