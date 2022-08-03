import { Layout, PageHeader, Pagination, PaginationProps } from 'antd';
import { Outlet, useSearchParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useStores } from 'hooks/useStores';
import { observer } from 'mobx-react-lite';
import { useDebounce } from 'hooks/useDebounce';

const { Content } = Layout;

const CharactersContent = observer(() => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { charactersStore, isLoading } = useStores();
  const characters = charactersStore.getCharacters();

  const pageNum = searchParams.get('page');

  const [current, setCurrent] = useState<number | undefined>(
    pageNum ? parseInt(pageNum) : undefined
  );

  const debouncedCurrentPage: number | undefined = useDebounce<
    number | undefined
  >(current, 600);

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
    if (debouncedCurrentPage) {
      if (searchParams.has('search')) {
        setSearchParams({
          search: searchParams.get('search') || '',
          page: debouncedCurrentPage.toString(),
        });
      } else {
        setSearchParams({ page: debouncedCurrentPage.toString() });
      }
    }
  }, [debouncedCurrentPage]);

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
