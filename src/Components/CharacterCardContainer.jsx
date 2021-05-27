import {Container, Col, Row} from "reactstrap";
import CharacterCard from "./CharacterCard";

const CharacterCardContainer = (props) => {
    const {disneyChars} = props;

    return (
        <>
            <Container>
                {disneyChars.map((character) => (
                    <CharacterCard key={character._id} character={character} />
                ))}
            </Container>
        </>
    )

}

export default CharacterCardContainer;