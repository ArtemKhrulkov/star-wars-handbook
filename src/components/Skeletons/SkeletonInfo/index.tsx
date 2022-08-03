import { Skeleton, Col, Row } from 'antd';

const SkeletonInfo = () => (
  <>
    <Skeleton.Input style={{ marginBottom: 50 }} />
    <Row>
      <Col xs={2} sm={10} md={6} lg={8} xl={6}>
        <Skeleton.Image style={{ width: 400, height: 500 }} />
      </Col>
      <Col xs={2} sm={16} md={12} lg={8} xl={16}>
        <Skeleton paragraph />
        <Skeleton paragraph />
      </Col>
    </Row>
  </>
);

export default SkeletonInfo;
