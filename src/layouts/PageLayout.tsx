import React, { memo } from 'react';
import { Layout } from 'antd';
import AppHeader from 'layouts/Header';
import AppFooter from 'layouts/Footer';
import AppContent from 'layouts/Content';
import { menuItems } from 'data';

const PageLayout = () => {
  return (
    <Layout style={{ width: '100vw', height: '100vh' }}>
      <AppHeader menuItems={menuItems} />
      <AppContent />
      <AppFooter />
    </Layout>
  );
};

export default PageLayout;
