import { useEffect, useState } from "react";
import CardContainer from "./CharacterCardContainer";
import Header from "./Header";

import axios from "axios";


const PageTwo = () => {
    const [data, setData] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const URL = "http://api.disneyapi.dev/characters?2";

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

    if (error) {
        return <h1>{error.message}</h1>
    } else if (!isLoaded) {
        return <h1>Loading...</h1>
    } else {
        return (
            <>
                <h1>Disney Test 2</h1>
                {/* <Header/> */}
                <CardContainer disneyChars={data.data}/>
            </>
        );
    }


}

export default PageTwo;