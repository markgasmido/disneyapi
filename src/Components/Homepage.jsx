import { useEffect, useState } from "react";
import CharacterCardContainer from "./CharacterCardContainer";
import CharacterPagination from "./CharacterPagination";
import Header from "./Header";
import { Container, Row, Col } from "reactstrap";
import axios from "axios";


const Homepage = () => {
    const [data, setData] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    const [searchQuery, setSearchQuery] = useState("");
    const URL = "http://api.disneyapi.dev/characters";

    useEffect(() => {
        axios.get(URL).then((res) => {
            console.log(res.data);
            setData(res.data);
            setIsLoaded(true);
        }).catch((err) => {
            console.error(err);
            setError(err);
            setIsLoaded(true);
        });
    }, []);

    const handlePreviousPage = () => {
        axios.get(data.previousPage).then((res) => {
            setData(res.data);
            setIsLoaded(true);
        }).catch((err) => {
            console.error(err);
            setError(err);
            setIsLoaded(true);
        });
    };

    const handleNextPage = () => {
        axios.get(data.nextPage).then((res) => {
            setData(res.data);
            setIsLoaded(true);
        }).catch((err) => {
            console.error(err);
            setError(err);
            setIsLoaded(true);
        });
    }



    const handleFilter = (e) => {
        // const listOfNames = data.data.map((character) => {
        //     return character.name;
        // });
        // console.log(listOfNames);
        setSearchQuery(e.target.value);

        // listOfNames.filter()
    }

    if (error) {
        return <h1>{error.message}</h1>
    } else if (!isLoaded) {
        return <h1>Loading...</h1>
    } else {
        return (
            <>
                <Container style={{backgroundImage: `url(https://i.pinimg.com/564x/ea/3d/6c/ea3d6cbaedab89f6b54927e3f40bd55c.jpg)`}}>
                    <Header handleFilter={handleFilter} query={searchQuery} />
                    <br/>
                    <CharacterCardContainer disneyChars={data.data} filterQuery={searchQuery} />
                    <br/>
                    <CharacterPagination handleNextPage={handleNextPage} handlePreviousPage={handlePreviousPage} previousPage={data.previousPage} nextPage={data.nextPage}></CharacterPagination>
                </Container>
            </>
        );
    }


}

export default Homepage;