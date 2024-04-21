import logo from './logo.svg';
import './App.css';
import MainHeader from './component/home/main_header';
import MainBody from './component/home/main_body';
import { Route, Routes } from 'react-router-dom';
import UserSetting from './pages/user/user_setting';
import { useState } from 'react';
import Login from './pages/login/login';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="App">
      <MainHeader></MainHeader>
      <Routes>
        <Route path='/' element={<MainBody isLogin={isLogin}/>} />
        <Route path='/login' element={<Login isLogin={isLogin} setIsLogin={setIsLogin} />} />
        <Route path='/user-setting/:user_id' element={<UserSetting isLogin={isLogin}/>} />
      </Routes>
    </div>


  );
}

export default App;
