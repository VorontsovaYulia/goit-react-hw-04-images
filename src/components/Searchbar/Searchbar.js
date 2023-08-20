import { ImSearch } from 'react-icons/im';
import { StyledHeader, StyledForm, StyledButton, StyledInput } from "./Searchbar.styled";

export const Searchbar = ({ changeQuery }) => {
   
    const handleSubmit = (evt) => {
        evt.preventDefault();
        changeQuery(evt.target.elements.query.value);
        evt.target.reset();
    }

        return (
            <StyledHeader>
                <StyledForm onSubmit={handleSubmit}>
                    <StyledButton type="submit">
                        <ImSearch size={20} />
                    </StyledButton>

                    <StyledInput
                        name="query"
                        type="text"
                        placeholder="Search images and photos"
                    />
                </StyledForm>
            </StyledHeader>
        )
    
}