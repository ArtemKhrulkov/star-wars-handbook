import { Layout, PageHeader, Pagination, PaginationProps } from 'antd';
import { Outlet, useLocation, useSearchParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useStores } from 'hooks/useStores';
import { observer } from 'mobx-react-lite';
import { autorun } from 'mobx';

const { Content } = Layout;

const AppContent = observer(() => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { search } = useLocation();
  const rootStore = useStores();

  const [current, setCurrent] = useState<number | undefined>(1);
  const [count, setCount] = useState<number | null>();

  const onChange: PaginationProps['onChange'] = (page) => {
    setCurrent(page);
    setSearchParams({ page: page.toString() });
  };

  const fetchResultsCountByUrl = async () => {
    const url = `/people/${search}`;
    const count = await rootStore.fetchResultsCountByUrl(url);

    const pageNum = searchParams.get('page');
    if (pageNum) {
      setCurrent(parseInt(pageNum));
    }
    setCount(count);
  };

  useEffect(() => {
    if (searchParams.has('page')) {
      fetchResultsCountByUrl();
    } else {
      setCount(null);
    }
  }, [searchParams]);

  return (
    <Content style={{ padding: '70px 10px' }}>
      <PageHeader className="site-page-header" title="Home" subTitle="" />
      <Outlet />
      {count && (
        <Pagination
          style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}
          current={current}
          onChange={onChange}
          total={count}
          showSizeChanger={false}
        />
      )}
    </Content>
  );
});

export default AppContent;
