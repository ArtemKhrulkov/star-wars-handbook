import { Layout, PageHeader } from 'antd';
import { Outlet, useLocation } from 'react-router-dom';
import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStores } from 'hooks/useStores';

const { Content } = Layout;

const PageContent = observer(() => {
  const { pathname } = useLocation();
  const { charactersStore } = useStores();
  const character = charactersStore.getCurrentCharacter();

  const isMainPage = pathname === '/';

  return (
    <Content style={{ padding: '70px 10px' }}>
      <PageHeader title={isMainPage ? 'Home' : character?.name} />
      <Outlet />
    </Content>
  );
});

export default PageContent;
