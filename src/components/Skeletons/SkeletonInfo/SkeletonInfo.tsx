import { Skeleton, Col, Row } from 'antd';

const SkeletonInfo = () => (
  <>
    <Skeleton.Input style={{ marginTop: 20, marginBottom: 30 }} active />
    <Row>
      <Col xs={2} sm={10} md={6} lg={8} xl={6}>
        <Skeleton.Image style={{ width: 400, height: 500 }} active />
      </Col>
      <Col xs={2} sm={16} md={12} lg={8} xl={16}>
        <Skeleton paragraph active />
        <Skeleton paragraph active />
      </Col>
    </Row>
  </>
);

export default SkeletonInfo;
