import { Card } from 'antd';
import { getUrlId } from 'utils';
import { FC } from 'react';
import { CharacterType } from 'types';
import { useNavigate } from 'react-router-dom';
type AppCardsProps = {
  character: CharacterType;
};

const { Meta } = Card;

const AppCards: FC<AppCardsProps> = (props) => {
  const navigate = useNavigate();
  const { character } = props;
  return (
    <Card
      key={character.name}
      hoverable
      style={{ width: 170 }}
      cover={
        <img
          alt={character.name}
          src={`https://starwars-visualguide.com/assets/img/characters/${getUrlId(
            character.url
          )}.jpg`}
        />
      }
      onClick={() => navigate(`/characters/${getUrlId(character.url)}`)}
    >
      <Meta title={character.name} />
    </Card>
  );
};

export default AppCards;
