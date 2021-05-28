import {Row} from "reactstrap";

const Header = (props) => {
    const {handleFilter, query} = props;

    return (
        <>
            <Row className="mx-auto" style={{maxWidth: "400px", backgroundColor: "blanchedalmond"}}>

                <h1 className="mx-auto">Disney Characters</h1>
                <br/>
                <input className="mx-auto" type="text" name="filterBar" id="filterBar" value={query} onInput={handleFilter} placeholder="Filter characters on page..."/>
            </Row>
        </>
    )
}

export default Header;