import { useState } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import CharacterCollapse from './CharacterCollapse';

const CharacterCard = (props) => {
    const { films, shortFilms, tvShows, videoGames, parkAttractions, allies, enemies, sourceUrl, name, imageUrl } = props.character;

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
            <Card>
                <CardImg src="https://d23.com/app/uploads/2013/04/1125-x-325-Walt-Disney-Archives-1024x296.jpg" alt={name} />
                <CardBody>
                    <CardTitle>{name}</CardTitle>
                    <CharacterCollapse data={films} toggle={toggleIsFilmOpen} state={isFilmOpen}/>
                    <CharacterCollapse data={shortFilms} toggle={toggleIsShortFilmOpen} state={isShortFilmOpen}/>
                    <CharacterCollapse data={tvShows} toggle={toggleIsTVShowOpen} state={isTVShowOpen}/>
                    <CharacterCollapse data={videoGames} toggle={toggleIsGamesOpen} state={isGamesOpen}/>
                    <CharacterCollapse data={parkAttractions} toggle={toggleIsParkOpen} state={isParkOpen}/>
                    <CharacterCollapse data={allies} toggle={toggleIsAlliesOpen} state={isAliiesOpen}/>
                    <CharacterCollapse data={enemies} toggle={toggleIsEnemiesOpen} state={isEnemiesOpen}/>
                </CardBody>
            </Card>
        </>
    )

};

export default CharacterCard;