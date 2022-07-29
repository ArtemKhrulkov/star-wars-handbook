import { observer } from 'mobx-react-lite';
import { useStores } from 'hooks/useStores';
import { useEffect } from 'react';
import { Space } from 'antd';
import { useSearchParams } from 'react-router-dom';
import SkeletonCards from 'components/SkeletonCards';
import AppCards from 'components/AppCards';
import { autorun } from 'mobx';

const Characters = observer(() => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { charactersStore, isLoading } = useStores();
  const characters = charactersStore.getCharacters();

  useEffect(() => {
    autorun(() => {
      if (!characters) {
        console.log('characters');
        charactersStore.fetchCharacters();
      }
    });
  }, []);

  useEffect(() => {
    autorun(() => {
      if (!searchParams.has('page')) {
        setSearchParams({ page: '1' });
      } else {
        charactersStore.fetchCharactersByPage(searchParams.get('page'));
      }
    });
  }, [searchParams]);

  if (isLoading) {
    return <SkeletonCards />;
  }

  return (
    <>
      <Space
        direction="horizontal"
        size="middle"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {characters?.results?.map((character) => (
          <AppCards key={character.name} character={character} />
        ))}
      </Space>
    </>
  );
});

export default Characters;
