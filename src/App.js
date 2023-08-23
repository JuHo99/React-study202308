import React, { useEffect, useState } from 'react';
import MainHeader from './components/SideEffect/MainHeader/MainHeader';
import Home from './components/SideEffect/Home/Home';
import Login from './components/SideEffect/Login/Login';
import AuthContext from './store/auth-context';

const App = () => {

  // 로그인 상태를 관리하는 변수
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 기존의 로그인 한 사람인지 확인하는 코드 (최초 한번만 실행)
  useEffect(() => {
    console.log(`useEffect 실행 - 한번만 실행`);
    console.log('로그인 검사 수행!');
    const storedLoginFlag = localStorage.getItem('login-flag');
    if (storedLoginFlag === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  // 서버로 로그인을 요청하는 함수
  const loginHandler = (email, password) => {
    // 로그인의 증거로 브라우저에 로그인 값을 1로 표현해서 저장
    localStorage.setItem('login-flag', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.setItem('login-flag', '1');
    setIsLoggedIn(false);
  }


  return (
    <AuthContext.Provider value={{
      isLoggedIn: isLoggedIn
    }}>
      <MainHeader onLogout={logoutHandler} />
      <main>
        {isLoggedIn && <Home />}
        {!isLoggedIn && <Login onLogin={loginHandler} />}
      </main>
    </AuthContext.Provider>

  );
};

export default App;
