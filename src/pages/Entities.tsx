import { Space, Input } from 'antd';
import { observer } from 'mobx-react-lite';
import { useStores } from 'hooks/useStores';

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

  const [searchValue, setSearchValue] = useState<string | undefined>(undefined);

  const rootStore = useStores();
  const { isLoading } = rootStore;
  const entities = rootStore.getEntities(name);

  const getEntitiesWithParams = async (value: string) => {
    await rootStore.fetchEntitiesBySearch(name, value);

    setSearchParams({
      search: value,
    });
  };

  const onSearchHandler = (value: string) => {
    getEntitiesWithParams(value);
  };

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    getEntitiesWithParams(searchParams.get('search') || '');
    setSearchValue(searchParams.get('search') || '');
  }, [pathname]);

  return isLoading ? (
    <SkeletonCards />
  ) : (
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
          onSearch={onSearchHandler}
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
