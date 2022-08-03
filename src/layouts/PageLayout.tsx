import { memo } from 'react';
import { Layout } from 'antd';
import AppHeader from 'layouts/Header';
import AppFooter from 'layouts/Footer';
import AppContent from 'layouts/AppContent';

const PageLayout = () => {
  return (
    <Layout style={{ minWidth: '100vw', minHeight: '100vh' }}>
      <AppHeader />
      <AppContent />
      <AppFooter />
    </Layout>
  );
};

export default memo(PageLayout);
