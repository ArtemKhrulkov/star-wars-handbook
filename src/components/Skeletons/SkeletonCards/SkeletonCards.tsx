import { Space, Skeleton } from 'antd';

const SkeletonCards = () => (
  <>
    <Space
      direction="vertical"
      style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: 10,
      }}
    >
      <Skeleton.Input style={{ width: 350 }} />
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
      <Skeleton.Image active style={{ width: 300, height: 480 }} />
      <Skeleton.Image active style={{ width: 300, height: 480 }} />
      <Skeleton.Image active style={{ width: 300, height: 480 }} />
      <Skeleton.Image active style={{ width: 300, height: 480 }} />
      <Skeleton.Image active style={{ width: 300, height: 480 }} />
      <Skeleton.Image active style={{ width: 300, height: 480 }} />
      <Skeleton.Image active style={{ width: 300, height: 480 }} />
      <Skeleton.Image active style={{ width: 300, height: 480 }} />
      <Skeleton.Image active style={{ width: 300, height: 480 }} />
      <Skeleton.Image active style={{ width: 300, height: 480 }} />
    </Space>
  </>
);

export default SkeletonCards;
