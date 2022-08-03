import { observer } from 'mobx-react-lite';
import { useStores } from 'hooks/useStores';
import { Space, Input } from 'antd';
import { useSearchParams } from 'react-router-dom';
import AppCards from 'components/AppCards';
import { ChangeEvent, useEffect, useState } from 'react';
import { autorun } from 'mobx';
import SkeletonCards from 'components/SkeletonCards';
import { useDebounce } from 'hooks/useDebounce';

const { Search } = Input;

const Characters = observer(() => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');

  const [searchValue, setSearchValue] = useState<string | undefined>(
    search || undefined
  );
  const { charactersStore, isLoading } = useStores();
  const characters = charactersStore.getCharacters();
  const debouncedSearchValue: string | undefined = useDebounce<
    string | undefined
  >(searchValue, 500);

  const isSearchUndefined =
    searchParams.get('search') === '' || !searchParams.has('search');

  const isPageUndefined = !searchParams.has('page');

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    setSearchParams({ search: debouncedSearchValue || '' });
  }, [debouncedSearchValue]);

  useEffect(() => {
    autorun(() => {
      if (isPageUndefined && isSearchUndefined) {
        setSearchParams({ page: '1' });
      } else if (searchParams.has('search')) {
        charactersStore.fetchCharactersBySearch(searchParams.get('search'));

        const search = searchParams.get('search');
        setSearchValue(search || '');
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
        direction="vertical"
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: 10,
        }}
      >
        <Search
          placeholder="Search characters..."
          style={{ width: 500 }}
          value={searchValue}
          defaultValue={searchValue}
          onChange={onChangeHandler}
        />
      </Space>
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
