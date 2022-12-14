import { Layout, PageHeader } from 'antd';
import { Outlet, useLocation } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useStores } from 'hooks/useStores';

const { Content } = Layout;

const PageContent = observer(() => {
  const { pathname } = useLocation();
  const { charactersStore, isLoading } = useStores();
  const character = charactersStore.getCurrentCharacter();

  const isMainPage = pathname === '/';

  return (
    <Content style={{ padding: '70px 10px' }}>
      {!isLoading && (
        <PageHeader title={isMainPage ? 'Home' : character?.name} />
      )}
      <Outlet />
    </Content>
  );
});

export default PageContent;
