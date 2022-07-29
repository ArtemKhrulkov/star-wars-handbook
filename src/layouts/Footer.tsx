import { Layout } from 'antd';
import React, { FC } from 'react';

const { Footer } = Layout;

const AppFooter: FC = () => (
  <Footer style={{ textAlign: 'center' }}>
    Star Wars Handbook @ {new Date().getFullYear()}
  </Footer>
);

export default AppFooter;
