import { Button, Collapse, List, ListGroupItem, ListGroupItemHeading } from 'reactstrap';
import { ChevronDown } from "react-bootstrap-icons";

const CharacterCollapse = (props) => {
    const { data, toggle, state, name } = props;

    return (
        <>
            <ListGroupItem>
                <ListGroupItemHeading>
                    {name}
                    <Button color="link" onClick={toggle} disabled={data.length === 0} width="auto"><ChevronDown></ChevronDown></Button>
                </ListGroupItemHeading>
                
                <Collapse isOpen={state}>
                    <List>
                        {data.map((element) => (
                            <li>{element}</li>
                        ))}
                    </List>
                </Collapse>
            </ListGroupItem>
        </>
    )

}

export default CharacterCollapse;