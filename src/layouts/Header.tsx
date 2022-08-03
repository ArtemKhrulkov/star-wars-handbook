import { Layout, Menu } from 'antd';
import React, { FC, memo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getChangedPathname } from 'utils';
import StarWarsLogo from 'assets/logo.svg';
import { menuItems } from 'data';

const { Header } = Layout;

const AppHeader: FC = () => {
  const { pathname } = useLocation();
  const changedPathname = getChangedPathname(pathname);

  const navigate = useNavigate();
  const handleClick = (item: { key: string }) => navigate(`${item.key}`);
  const goHome = () => navigate('/');

  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div
        style={{ width: 80, height: 60, cursor: 'pointer', float: 'left' }}
        onClick={goHome}
      >
        <img src={StarWarsLogo} width={60} height={60} alt="logo" />
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        activeKey={changedPathname}
        selectedKeys={[pathname]}
        items={menuItems}
        onClick={handleClick}
      />
    </Header>
  );
};

export default memo(AppHeader);
