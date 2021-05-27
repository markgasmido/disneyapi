import {Pagination, PaginationItem, PaginationLink} from "reactstrap"

const CharacterPagination = (props) => {
    const {handleNextPage, handlePreviousPage} = props;

    return (
        <>
            <Pagination>
                <PaginationItem>
                    <PaginationLink previous href="#" onClick={handlePreviousPage}>

                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    Current Page
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink next href="#" onClick={handleNextPage}>

                    </PaginationLink>
                </PaginationItem>

            </Pagination>
        </>
    )
}

export default CharacterPagination;