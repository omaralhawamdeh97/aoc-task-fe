import { DeleteButtonStyled } from "../../styles";

const DeleteButton = (props) => {
  return (
    <DeleteButtonStyled onClick={props.deleteBook}>Delete</DeleteButtonStyled>
  );
};

export default DeleteButton;
