import PacmanLoader from "react-spinners/PacmanLoader";
import { StyledDiv } from "./Loader.styled";

export const Loader = () => {
    return (
        <StyledDiv>
            <PacmanLoader color="#3f51b5" />
        </StyledDiv> 
    )
}