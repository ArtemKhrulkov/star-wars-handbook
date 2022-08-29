import { Col } from 'antd';
import { FC } from 'react';
import { CharacterType, EntityType } from 'types';

type InfoProps = {
  entity: EntityType;
};

const Info: FC<InfoProps> = ({ entity }: InfoProps) => (
  <Col xs={16} sm={16} md={12} lg={8} xl={16}>
    <p>
      <strong>Name:</strong> {(entity as CharacterType).name}
    </p>
    <p>
      <strong>Birth Year:</strong> {(entity as CharacterType).birth_year}
    </p>
    <p>
      <strong>Height:</strong> {(entity as CharacterType).height}
    </p>
    <p>
      <strong>Gender:</strong> {(entity as CharacterType).gender}
    </p>
    <p>
      <strong>Mass:</strong> {(entity as CharacterType).mass}
    </p>
    <p>
      <strong>Eye Color:</strong> {(entity as CharacterType).eye_color}
    </p>
    <p>
      <strong>Hair Color:</strong> {(entity as CharacterType).hair_color}
    </p>
    <p>
      <strong>Skin Color:</strong> {(entity as CharacterType).skin_color}
    </p>
  </Col>
);
export default Info;
