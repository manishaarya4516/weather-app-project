import { ButtonStyled } from "./style";

export const Button = (props) => {
    const{name,handleClick,}=props;
    return(
    <ButtonStyled onClick={handleClick}>
        {name}
    </ButtonStyled>
    );
};