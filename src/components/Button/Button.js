import { StyledBtn } from "./Button.styled"

export const Button = ({ onButton }) => {
    return (
        <>
            <StyledBtn onClick={onButton} type="button">Load more</StyledBtn>
        </>
    )
}