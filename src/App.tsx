import { FC, useState } from 'react';
import { ToastContainer } from 'react-toastify';

import Header from './components/header';
import Main from './components/main';
import Password from './components/Password';

import './styles/index.scss';

export const App: FC = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      <ToastContainer />
      <Header />
      {!isLogin ? <Password setIsLogin={setIsLogin} /> : <Main />}
    </>
  );
};
