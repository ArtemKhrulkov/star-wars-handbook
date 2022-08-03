import { Layout, Menu } from 'antd';
import React, { FC, memo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ItemType } from 'antd/es/menu/hooks/useItems';
import { getChangedPathname } from 'utils';
import StarWarsLogo from 'assets/logo.svg';

const { Header } = Layout;

type HeaderProps = {
  menuItems: ItemType[];
};

const AppHeader: FC<HeaderProps> = ({ menuItems }) => {
  const { pathname } = useLocation();
  const changedPathname = getChangedPathname(pathname);

  const navigate = useNavigate();
  const handleClick = (item: { key: string }) => navigate(`${item.key}`);
  const goHome = () => navigate('/');

  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div
        style={{ width: 80, height: 80, cursor: 'pointer', float: 'left' }}
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
