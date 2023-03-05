import { PropTypes } from "prop-types";
import { LoadBtnContainer, LoadButton } from "./Button.styled"

export const Button = ({onClick}) => {
    return(
        <LoadBtnContainer>
        <LoadButton type="button" onClick={onClick}>
        load more
        </LoadButton>
        </LoadBtnContainer>
    )
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
};