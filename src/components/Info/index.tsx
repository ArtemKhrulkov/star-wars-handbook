import { Col } from 'antd';
import { FC } from 'react';
import { CharacterType } from 'types';

type InfoProps = {
  character: CharacterType;
};

const Info: FC<InfoProps> = ({ character }: InfoProps) => (
  <Col xs={16} sm={16} md={12} lg={8} xl={16}>
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
);
export default Info;
