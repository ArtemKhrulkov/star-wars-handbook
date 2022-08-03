import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useStores } from 'hooks/useStores';
import { Col, Row } from 'antd';
import { getCharacterImage } from 'utils';

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
            <Col xs={2} sm={16} md={12} lg={8} xl={16}>
              <p>
                <strong>Name:</strong> {character.name}
              </p>
              <p>
                <strong>Birth Year:</strong> {character.birth_year}
              </p>
              <p>
                <strong>Height:</strong> {character.height}
              </p>
              <p>
                <strong>Gender:</strong> {character.gender}
              </p>
              <p>
                <strong>Mass:</strong> {character.mass}
              </p>
              <p>
                <strong>Eye Color:</strong> {character.eye_color}
              </p>
              <p>
                <strong>Hair Color:</strong> {character.hair_color}
              </p>
              <p>
                <strong>Skin Color:</strong> {character.skin_color}
              </p>
            </Col>
          </Row>
        </>
      )}
    </>
  );
});

export default CharacterPage;
