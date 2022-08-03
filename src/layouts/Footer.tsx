import { Layout } from 'antd';
import { FC, memo } from 'react';

const { Footer } = Layout;

const AppFooter: FC = () => (
  <Footer style={{ textAlign: 'center' }}>
    Star Wars Handbook @ {new Date().getFullYear()}
  </Footer>
);

export default memo(AppFooter);
