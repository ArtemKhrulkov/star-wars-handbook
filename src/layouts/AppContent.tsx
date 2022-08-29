import { useLocation } from 'react-router-dom';
import EntitiesContent from './EntitiesContent';
import PageContent from './PageContent';

const AppContent = () => {
  const { pathname } = useLocation();
  switch (pathname) {
    case '/characters':
      return <EntitiesContent title={'Characters'} />;
    case '/films':
      return <EntitiesContent title={'Films'} />;
    case '/planets':
      return <EntitiesContent title={'Planets'} />;
    case '/starships':
      return <EntitiesContent title={'Starships'} />;
    case '/vehicles':
      return <EntitiesContent title={'Vehicles'} />;
    case '/species':
      return <EntitiesContent title={'Species'} />;
    default:
      return <PageContent />;
  }
};

export default AppContent;
