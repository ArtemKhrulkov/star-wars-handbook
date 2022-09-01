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
    setSearchParams({ search: debouncedSearchValue || '' });
  }, [debouncedSearchValue]);

  useEffect(() => {
    if (isPageUndefined && isSearchUndefined) {
      setSearchParams({ page: '1' });
    } else if (searchParams.has('search')) {
      if (searchParams.has('page')) {
        rootStore.fetchEntitiesBySearchAndPage(
          name,
          searchParams.get('search'),
          searchParams.get('page')
        );
      } else {
        rootStore.fetchEntitiesBySearch(name, searchParams.get('search'));
      }

      setSearchValue(search || '');
    } else {
      rootStore.fetchEntitiesByPage(name, searchParams.get('page'));
    }
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
