import { useState } from 'react';
import { Card, CardImg, CardBody, CardTitle, ListGroup } from 'reactstrap';
import CharacterCollapse from './CharacterCollapse';

const CharacterCard = (props) => {
    const { films, shortFilms, tvShows, videoGames, parkAttractions, allies, enemies, sourceUrl, name, imageUrl } = props.character;

    let loadImageUrl = "";
    if (imageUrl === undefined) {
        loadImageUrl ="https://static.wikia.nocookie.net/disney/images/7/7c/Noimage.png";
    } else {
        const idx = imageUrl.search(/\/revision/);
        loadImageUrl = imageUrl.slice(0, idx);
    }
    

    const [isFilmOpen, setIsFilmOpen] = useState(false);
    const [isShortFilmOpen, setIsShortFilmOpen] = useState(false);
    const [isTVShowOpen, setIsTVShowOpen] = useState(false);
    const [isGamesOpen, setIsGamesOpen] = useState(false);
    const [isParkOpen, setIsParkOpen] = useState(false);
    const [isAliiesOpen, setIsAlliesOpen] = useState(false);
    const [isEnemiesOpen, setIsEnemiesOpen] = useState(false);

    const toggleIsFilmOpen = () => {
        setIsFilmOpen(!isFilmOpen);
    }
    const toggleIsShortFilmOpen = () => {
        setIsShortFilmOpen(!isShortFilmOpen);
    }
    const toggleIsTVShowOpen = () => {
        setIsTVShowOpen(!isTVShowOpen);
    }
    const toggleIsGamesOpen = () => {
        setIsGamesOpen(!isGamesOpen);
    }
    const toggleIsParkOpen = () => {
        setIsParkOpen(!isParkOpen);
    }
    const toggleIsAlliesOpen = () => {
        setIsAlliesOpen(!isAliiesOpen);
    }
    const toggleIsEnemiesOpen = () => {
        setIsEnemiesOpen(!isEnemiesOpen);
    }

    return (
        <>
            <Card >
                <CardImg top src={loadImageUrl} alt={name}/>
                <CardBody>
                    <CardTitle style={{fontWeight: "bolder", fontSize: 30 }}>{name}</CardTitle>
                    <ListGroup>

                        <CharacterCollapse name="Films" data={films} toggle={toggleIsFilmOpen} state={isFilmOpen} />
                        <CharacterCollapse name="Short Films" data={shortFilms} toggle={toggleIsShortFilmOpen} state={isShortFilmOpen} />
                        <CharacterCollapse name="TV Shows" data={tvShows} toggle={toggleIsTVShowOpen} state={isTVShowOpen} />
                        <CharacterCollapse name="Video Games" data={videoGames} toggle={toggleIsGamesOpen} state={isGamesOpen} />
                        <CharacterCollapse name="Park Attractions" data={parkAttractions} toggle={toggleIsParkOpen} state={isParkOpen} />
                        <CharacterCollapse name="Allies" data={allies} toggle={toggleIsAlliesOpen} state={isAliiesOpen} />
                        <CharacterCollapse name="Enemies" data={enemies} toggle={toggleIsEnemiesOpen} state={isEnemiesOpen} />
                    </ListGroup>
                </CardBody>
            </Card>
        </>
    )

};

export default CharacterCard;