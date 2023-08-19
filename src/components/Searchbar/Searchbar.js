export const Searchbar = ({changeQuery}) => {
   
    const handleSubmit = (evt) => {
        evt.preventDefault();
        changeQuery(evt.target.elements.query.value);
        evt.target.reset();
    }

        return (
            <header>
                <form onSubmit={handleSubmit}>
                    <button type="submit">
                        <span>Search</span>
                    </button>

                    <input
                        name="query"
                        type="text"
                        // autocomplete="off"
                        // autofocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
    
}