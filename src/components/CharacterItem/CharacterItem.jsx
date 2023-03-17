import PropTypes from 'prop-types';

import fallback from 'images/characterItem/fallback.png';
import {
  ImgContainer,
  CharacterImg,
  CharacterName,
  InfoContainer,
  CharacterSpecies,
} from './CharacterItem.styled';

const CharacterItem = ({ character: { species, image, name } }) => {
  let imagePath = ``;
  !image ? (imagePath = fallback) : (imagePath = image);

  return (
    <>
      <ImgContainer>
        <CharacterImg
          src={imagePath}
          alt={name}
          // width="312px"
          // height="232px"
          loading="lazy"
        />
      </ImgContainer>
      <InfoContainer>
        <CharacterName>{name}</CharacterName>
        <CharacterSpecies>{species}</CharacterSpecies>
      </InfoContainer>
    </>
  );
};

export default CharacterItem;

CharacterItem.propTypes = {
  //   title: PropTypes.string,
  //   name: PropTypes.string,
  //   poster_path: PropTypes.string,
};
