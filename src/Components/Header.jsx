

const Header = (props) => {
    const {handleFilter, query} = props;

    return (
        <>
            <img src="" alt="" />
            <input type="text" name="filterBar" id="filterBar" value={query} onInput={handleFilter}/>
        </>
    )
}

export default Header;