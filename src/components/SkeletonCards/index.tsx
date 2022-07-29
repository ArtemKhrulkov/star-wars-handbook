import { Space, Skeleton } from 'antd';

const SkeletonCards = () => (
  <>
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
      <Skeleton.Image active style={{ width: 170, height: 300 }} />
      <Skeleton.Image active style={{ width: 170, height: 300 }} />
      <Skeleton.Image active style={{ width: 170, height: 300 }} />
      <Skeleton.Image active style={{ width: 170, height: 300 }} />
      <Skeleton.Image active style={{ width: 170, height: 300 }} />
      <Skeleton.Image active style={{ width: 170, height: 300 }} />
      <Skeleton.Image active style={{ width: 170, height: 300 }} />
      <Skeleton.Image active style={{ width: 170, height: 300 }} />
      <Skeleton.Image active style={{ width: 170, height: 300 }} />
      <Skeleton.Image active style={{ width: 170, height: 300 }} />
    </Space>
  </>
);

export default SkeletonCards;
