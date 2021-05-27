import { Button, Collapse, List } from 'reactstrap';

const CharacterCollapse = (props) => {
    const { data, toggle, state } = props;

    return (
        <>
            <Button onClick={toggle}></Button>
            <Collapse isOpen={state}>
                <List>
                    {data.map((element) => (
                        <li>{element}</li>
                    ))}
                </List>
            </Collapse>
        </>
    )

}

export default CharacterCollapse;