import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Status } from 'constants/status';
import { fetchingById } from 'services/seriesApi';
import { ReactComponent as ArrowBack } from 'images/svg/BackArrow.svg';
import { Box } from 'components/Box/Box';
import {
  BackBtn,
  CharacterImg,
  CharacterTitle,
  InfoTitle,
  InfoList,
  InfoItem,
  InfoItemTitle,
  InfoItemValue,
} from './CharacterPage.styled';
import { Container } from 'constants/GlobalStyle';

const CharacterPage = () => {
  const [status, setStatus] = useState(Status.IDLE);
  const [character, setCharacter] = useState({});

  const location = useLocation();
  const backLinkHref = location?.state?.from ?? '/';

  const { id } = useParams();

  useEffect(() => {
    if (!id) return;

    async function setCharacterById() {
      setStatus(Status.PENDING);

      try {
        const characterById = await fetchingById(id);
        setCharacter(characterById);
        setStatus(Status.RESOLVED);
      } catch (error) {
        setStatus(Status.REJECTED);
        console.log(error);
      }
    }

    setCharacterById();
  }, [id]);

  return (
    <main>
      <Container>
        <BackBtn to={backLinkHref}>
          <ArrowBack />
          <span>GO BACK</span>
        </BackBtn>
      </Container>

      <Box as="section" pt="72px" pb="85px">
        <Container>
          <CharacterImg src={character.image} alt={character.name} />
          <CharacterTitle>{character.name}</CharacterTitle>
          <div>
            <InfoTitle>Informations</InfoTitle>
            <InfoList>
              <InfoItem>
                <InfoItemTitle>Gender</InfoItemTitle>
                <InfoItemValue>{character.gender || 'Unknown'}</InfoItemValue>
              </InfoItem>
              <InfoItem>
                <InfoItemTitle>Status</InfoItemTitle>
                <InfoItemValue>{character.status || 'Unknown'}</InfoItemValue>
              </InfoItem>
              <InfoItem>
                <InfoItemTitle>Specie</InfoItemTitle>
                <InfoItemValue>{character.species || 'Unknown'}</InfoItemValue>
              </InfoItem>
              <InfoItem>
                <InfoItemTitle>Origin</InfoItemTitle>
                <InfoItemValue>
                  {character?.origin?.name || 'Unknown'}
                </InfoItemValue>
              </InfoItem>
              <InfoItem>
                <InfoItemTitle>Type</InfoItemTitle>
                <InfoItemValue>{character.type || 'Unknown'}</InfoItemValue>
              </InfoItem>
            </InfoList>
          </div>
        </Container>
      </Box>
    </main>
  );
};

export default CharacterPage;
