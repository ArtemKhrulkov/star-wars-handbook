import { useLocation } from 'react-router-dom';
import CharactersContent from './CharactesContent';
import PageContent from './PageContent';
import React from 'react';

const AppContent = () => {
  const { pathname } = useLocation();
  return pathname === '/characters' ? <CharactersContent /> : <PageContent />;
};

export default AppContent;
