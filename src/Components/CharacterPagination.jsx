import {Pagination, PaginationItem, PaginationLink} from "reactstrap"

const CharacterPagination = (props) => {
    const {handleNextPage, handlePreviousPage, previousPage, nextPage} = props;

    const ifPrevious = () => {
        return previousPage.length === 0;
    }
    const ifNext = () => {
        return nextPage.length === 0;
    }

    return (
        <>
            <Pagination>
                <PaginationItem >
                    <PaginationLink previous href="#" onClick={handlePreviousPage}>

                    </PaginationLink>
                </PaginationItem>
                <PaginationItem active>
                    Current Page
                </PaginationItem>
                <PaginationItem >
                    <PaginationLink next href="#" onClick={handleNextPage}>

                    </PaginationLink>
                </PaginationItem>

            </Pagination>
        </>
    )
}

export default CharacterPagination;