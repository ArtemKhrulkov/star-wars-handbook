import { Space, Input } from 'antd';
import { observer } from 'mobx-react-lite';
import { useStores } from 'hooks/useStores';
import { useDebounce } from 'hooks/useDebounce';

import { useLocation, useSearchParams } from 'react-router-dom';
import { AppCards } from 'components/AppCards';
import { SkeletonCards } from 'components/Skeletons';

import { ChangeEvent, FC, useEffect, useState } from 'react';

const { Search } = Input;

type EntitiesProps = {
  name: string;
};

const Entities: FC<EntitiesProps> = observer((props) => {
  const { name } = props;
  const { pathname } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');
  const page = searchParams.get('page');

  const [searchValue, setSearchValue] = useState<string | undefined>(
    search || undefined
  );

  const rootStore = useStores();
  const { isLoading } = rootStore;

  const entities = rootStore.getEntities(name);
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
    setSearchValue(undefined);
  }, [pathname]);

  useEffect(() => {
    if (debouncedSearchValue) {
      setSearchParams({
        search: debouncedSearchValue || '',
        page: searchParams.get('page') || '1',
      });
    } else {
      setSearchParams({ page: '1' });
    }
  }, [debouncedSearchValue]);

  useEffect(() => {
    if (searchParams.has('search') && searchParams.has('page')) {
      rootStore.fetchEntitiesBySearchAndPage(
        name,
        searchParams.get('search'),
        searchParams.get('page')
      );
    } else if (searchParams.has('search')) {
      rootStore.fetchEntitiesBySearch(name, search);
    }

    setSearchValue(search || undefined);
  }, [search]);

  useEffect(() => {
    if (isPageUndefined && isSearchUndefined) {
      rootStore.fetchEntitiesByPage(name, '1');
    } else if (searchParams.has('page')) {
      rootStore.fetchEntitiesByPage(name, page);
    }
  }, [page]);

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
          placeholder="Search..."
          size="large"
          style={{ width: 350 }}
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
        {entities?.results?.map((entity) => (
          <AppCards
            key={entity.created.toString()}
            name={name}
            entity={entity}
          />
        ))}
      </Space>
    </>
  );
});

export default Entities;
