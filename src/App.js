import logo from './logo.svg';
import './App.css';
import MainHeader from './component/home/main_header';
import MainBody from './component/home/main_body';
import { Route, Routes } from 'react-router-dom';
import UserSetting from './pages/user/user_setting';

function App() {
  return (
    <div className="App">
      <MainHeader></MainHeader>
      <Routes>
        <Route path='/' element={<MainBody />} />
        <Route path='/user-setting/:user_id' element={<UserSetting />} />
      </Routes>
    </div>


  );
}

export default App;
