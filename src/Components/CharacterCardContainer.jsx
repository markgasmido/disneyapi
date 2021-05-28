import {Container, Col, Row} from "reactstrap";
import CharacterCard from "./CharacterCard";

const CharacterCardContainer = (props) => {
    const {disneyChars, filterQuery} = props;
        
    // const filterQuery = () => (data) => {data.data.name.toLowerCase().includes(searchQuery.toLowerCase())};
    // const filterByQuery = (character) => {
    //     character.name.toLowerCase().includes(filterQuery.toLowerCase());
    // }
    
        // listOfNames.filter()


    if (filterQuery.length > 0) {
        return (
            <>
                <Container>
                    {disneyChars.filter(character => character.name.toLowerCase().includes(filterQuery.toLowerCase())).map((character) => (
                        <CharacterCard key={character._id} character={character} />
                    ))}
                </Container>
            </>
        )
    } else {
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

    

}

export default CharacterCardContainer;