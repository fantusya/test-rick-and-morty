import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import CharacterItem from 'components/CharacterItem';
import { GiClick } from 'react-icons/gi';
import { Box } from 'components/Box/Box';

import {
  CharacterCard,
  CharacterLink,
  CharacterBack,
  TapIcon,
  TapText,
} from './CharactersList.styled';

const CharacterList = ({ charactersArray, refValue }) => {
  const location = useLocation();

  return (
    <Box
      as="ul"
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      gridGap={[5, null, null, '20px']}
    >
      {charactersArray.map((character, index) => {
        if (charactersArray.length === index + 1) {
          return (
            <CharacterCard ref={refValue} key={character.id}>
              <CharacterLink
                to={`/character/${character.id}`}
                state={{ from: location }}
              >
                <CharacterItem character={character} />
              </CharacterLink>
              <CharacterBack>
                <TapIcon size={40} />
                <TapText>Tap to learn more</TapText>
              </CharacterBack>
            </CharacterCard>
          );
        } else {
          return (
            <CharacterCard key={character.id}>
              <CharacterLink
                to={`/character/${character.id}`}
                state={{ from: location }}
              >
                <CharacterItem character={character} />
              </CharacterLink>
              <CharacterBack>
                <TapIcon size={40} />
                <TapText>Tap to learn more</TapText>
              </CharacterBack>
            </CharacterCard>
          );
        }
      })}
    </Box>
  );
};

export default CharacterList;

CharacterList.propTypes = {
  //   title: PropTypes.string,
  //   name: PropTypes.string,
  //   poster_path: PropTypes.string,
};
