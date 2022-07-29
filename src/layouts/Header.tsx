import { Layout, Menu } from 'antd';
import React, { FC, memo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ItemType } from 'antd/es/menu/hooks/useItems';
import { getChangedPathname } from 'utils';

const { Header } = Layout;

type HeaderProps = {
  menuItems: ItemType[];
};

const AppHeader: FC<HeaderProps> = ({ menuItems }) => {
  const { pathname } = useLocation();
  const changedPathname = getChangedPathname(pathname);

  const navigate = useNavigate();
  const handleClick = (item: { key: string }) => navigate(`${item.key}`);

  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
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

export default AppHeader;
