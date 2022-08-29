import { Layout, PageHeader, Pagination, PaginationProps } from 'antd';
import { Outlet, useSearchParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useStores } from 'hooks/useStores';
import { observer } from 'mobx-react-lite';

const { Content } = Layout;

const CharactersContent = observer(() => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { charactersStore, isLoading } = useStores();
  const characters = charactersStore.getCharacters();

  const pageNum = searchParams.get('page');

  const [current, setCurrent] = useState<number | undefined>(
    pageNum ? parseInt(pageNum) : undefined
  );

  const onChangeHandler: PaginationProps['onChange'] = (page) => {
    setCurrent(page);
  };

  useEffect(() => {
    if (pageNum) {
      setCurrent(parseInt(pageNum));
    } else {
      setCurrent(1);
    }
  }, [pageNum]);

  useEffect(() => {
    if (current) {
      if (searchParams.has('search')) {
        setSearchParams({
          search: searchParams.get('search') || '',
          page: current.toString(),
        });
      } else {
        setSearchParams({ page: current.toString() });
      }
    }
  }, [current]);

  return (
    <Content style={{ padding: '70px 10px' }}>
      <PageHeader title="Characters" />
      <Outlet />
      {characters?.count && (
        <Pagination
          style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}
          current={current}
          disabled={isLoading}
          onChange={onChangeHandler}
          total={characters?.count}
          showSizeChanger={false}
        />
      )}
    </Content>
  );
});

export default CharactersContent;
