import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useStores } from 'hooks/useStores';
import { Col, Row } from 'antd';
import { getCharacterImage } from 'utils';
import Info from 'components/Info';

const CharacterPage = observer(() => {
  const { id } = useParams();
  const { charactersStore } = useStores();
  const character = charactersStore.getCurrentCharacter();

  useEffect(() => {
    charactersStore.fetchCharacterById(id);
  }, []);

  return (
    <>
      {character && (
        <>
          <Row>
            <Col xs={2} sm={4} md={6} lg={8} xl={6}>
              <img src={getCharacterImage(character.url)} alt={'Character'} />
            </Col>
            <Info character={character} />
          </Row>
        </>
      )}
    </>
  );
});

export default CharacterPage;
