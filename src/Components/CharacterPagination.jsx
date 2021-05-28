import { Pagination, PaginationItem, PaginationLink, Row } from "reactstrap"

const CharacterPagination = (props) => {
    const { handleNextPage, handlePreviousPage, previousPage, nextPage } = props;

    return (
        <>
            <Row className="mx-auto" style={{ width: "200px", backgroundColor: "blanchedalmond" }}>
                <Pagination className="mx-auto">
                    <PaginationItem disabled={previousPage === undefined}>
                        <PaginationLink previous href="#" onClick={handlePreviousPage}>

                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem active>
                        Current Page
                    </PaginationItem>
                    <PaginationItem disabled={nextPage === undefined}>
                        <PaginationLink next href="#" onClick={handleNextPage}>

                        </PaginationLink>
                    </PaginationItem>

                </Pagination>
            </Row>
        </>
    )
}

export default CharacterPagination;