import { Card, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import { categoriesCards } from 'data';
import { useEffect, useState } from 'react';

const { Meta } = Card;

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <Space
      direction="horizontal"
      size="middle"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      {categoriesCards.map((category) => (
        <Card
          key={category.title}
          hoverable
          style={{ width: 400 }}
          cover={<img alt={category.title} src={category.imgUrl} />}
          onClick={() => navigate(category.url)}
        >
          <Meta title={category.title} description={category.description} />
        </Card>
      ))}
    </Space>
  );
};

export default Home;
