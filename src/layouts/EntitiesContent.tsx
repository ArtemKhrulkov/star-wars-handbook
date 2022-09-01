import { Layout, PageHeader, Pagination, PaginationProps } from 'antd';
import { Outlet, useSearchParams } from 'react-router-dom';
import React, { FC, useEffect, useState } from 'react';
import { useStores } from 'hooks/useStores';
import { observer } from 'mobx-react-lite';

const { Content } = Layout;

type EntitiesContentProps = {
  title: string;
};

const EntitiesContent: FC<EntitiesContentProps> = observer((props) => {
  const { title } = props;
  const [searchParams, setSearchParams] = useSearchParams();
  const { getEntities, isLoading } = useStores();
  const entities = getEntities(title.toLowerCase());

  const pageNum = searchParams.get('page');

  const [current, setCurrent] = useState<number | undefined>(
    pageNum ? parseInt(pageNum) : 1
  );

  const onChangeHandler: PaginationProps['onChange'] = (page) => {
    setCurrent(page);

    if (searchParams.has('search')) {
      setSearchParams({
        search: searchParams.get('search') || '',
        page: page.toString(),
      });
    } else {
      setSearchParams({ page: page.toString() });
    }
  };

  useEffect(() => {
    if (pageNum) {
      setCurrent(parseInt(pageNum));
    }
  }, [pageNum]);

  return (
    <Content style={{ padding: '70px 10px' }}>
      <PageHeader title={title} />
      <Outlet />
      {entities?.count && (
        <Pagination
          style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}
          current={current}
          disabled={isLoading}
          onChange={onChangeHandler}
          total={entities?.count}
          showSizeChanger={false}
        />
      )}
    </Content>
  );
});

export default EntitiesContent;
