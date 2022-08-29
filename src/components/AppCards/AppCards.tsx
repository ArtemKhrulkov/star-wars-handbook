import { Card } from 'antd';
import { getEntityImage, getUrlId } from 'utils';
import { FC } from 'react';
import { CharacterType, EntityType, FilmType } from 'types';
import { useNavigate } from 'react-router-dom';

const { Meta } = Card;

type AppCardsProps = {
  name: string;
  entity: EntityType;
};

const AppCards: FC<AppCardsProps> = (props) => {
  const navigate = useNavigate();
  const { entity, name } = props;
  return (
    <Card
      key={entity.edited.toString()}
      hoverable
      style={{ width: 300 }}
      cover={
        <img
          alt={(entity as CharacterType).name || (entity as FilmType).title}
          src={getEntityImage(name, entity.url)}
          loading="eager"
        />
      }
      onClick={() => navigate(`/${name}/${getUrlId(entity.url)}`)}
    >
      <Meta
        title={(entity as CharacterType).name || (entity as FilmType).title}
      />
    </Card>
  );
};

export default AppCards;
