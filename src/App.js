import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/main.js';
import { ResultPage } from './pages/results.js';
import { LoginPage } from './pages/login.js';
import background from './images/background.jpg';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className='App' style={{
          backgroundImage: `url(${background})`, 
          backgroundSize: 'cover'
        }}>
          <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/results' element={<ResultPage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
