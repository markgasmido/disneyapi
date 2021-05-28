import { Container, Col, Row } from "reactstrap";
import CharacterCard from "./CharacterCard";

const CharacterCardContainer = (props) => {
    const { disneyChars, filterQuery } = props;

    // const filterQuery = () => (data) => {data.data.name.toLowerCase().includes(searchQuery.toLowerCase())};
    // const filterByQuery = (character) => {
    //     character.name.toLowerCase().includes(filterQuery.toLowerCase());
    // }

    // listOfNames.filter()


    if (filterQuery.length > 0) {
        return (
            <>

                <Row xs="3">

                    {disneyChars.filter(character => character.name.toLowerCase().includes(filterQuery.toLowerCase())).map((character) => (

                        <Col>
                            <CharacterCard key={character._id} character={character} />
                        </Col>
                    ))}

                </Row>
            </>
        )
    } else {
        return (
            <>
                <Row xs="3" >

                    {disneyChars.map((character) => (
                        <Col>
                            <CharacterCard key={character._id} character={character} />
                        </Col>

                    ))}

                </Row>
            </>
        )
    }



}

export default CharacterCardContainer;