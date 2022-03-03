import { VFC } from 'react';

import s from './header.module.scss';

const Header: VFC = () => {
  return <header className={s.header}>
    <a href="https://metaangeldao.com"><img src="DAO.png" alt="META ANGEL DAO" height="150px" style={{ marginTop: '-20px' }} /></a></header>;
};

export default Header;
