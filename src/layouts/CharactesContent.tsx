import { Layout, PageHeader, Pagination, PaginationProps } from 'antd';
import { Outlet, useSearchParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useStores } from 'hooks/useStores';
import { observer } from 'mobx-react-lite';
import { autorun } from 'mobx';
import { useDebounce } from 'hooks/useDebounce';

const { Content } = Layout;

const CharactersContent = observer(() => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { charactersStore } = useStores();
  const characters = charactersStore.getCharacters();

  const [current, setCurrent] = useState<number | undefined>(1);
  const debouncedCurrentPage: number | undefined = useDebounce<
    number | undefined
  >(current, 600);

  const onChangeHandler: PaginationProps['onChange'] = (page) => {
    setCurrent(page);
  };

  useEffect(() => {
    if (debouncedCurrentPage) {
      setSearchParams({ page: current?.toString() || '1' });
    }
  }, [debouncedCurrentPage]);

  useEffect(() => {
    autorun(() => {
      if (searchParams.has('page')) {
        const pageNum = searchParams.get('page');
        if (pageNum) {
          setCurrent(parseInt(pageNum));
        }
      }
    });
  }, [searchParams]);

  return (
    <Content style={{ padding: '70px 10px' }}>
      <PageHeader title="Characters" />
      <Outlet />
      {characters?.count && (
        <Pagination
          style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}
          current={current}
          onChange={onChangeHandler}
          total={characters?.count}
          showSizeChanger={false}
        />
      )}
    </Content>
  );
});

export default CharactersContent;
