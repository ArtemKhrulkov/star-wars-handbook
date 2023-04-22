import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';
import { FC, useEffect } from 'react';
import { useStores } from 'hooks/useStores';
import { Col, Row } from 'antd';
import { getEntityImage } from 'utils';
import { Info } from 'components/Info';
import { SkeletonInfo } from 'components/Skeletons';

type EntityPage = {
  name: string;
};

const CharacterPage: FC<EntityPage> = observer((props) => {
  const { name } = props;
  const { id } = useParams();
  const rootStore = useStores();
  const { isLoading } = rootStore;
  const entity = rootStore.getCurrentEntity(name);

  useEffect(() => {
    rootStore.fetchEntityById(name, id);
  }, []);

  if (isLoading) {
    return <SkeletonInfo />;
  }

  return (
    <>
      {entity && (
        <>
          <Row>
            <Col xs={16} sm={10} md={6} lg={8} xl={6}>
              <img
                width={350}
                height={'auto'}
                src={getEntityImage(name, entity.url)}
                alt={'Character'}
              />
            </Col>
            <Info entity={entity} />
          </Row>
        </>
      )}
    </>
  );
});

export default CharacterPage;
