import { DeleteButtonStyled } from "../../styles";

const DeleteButton = (props) => {
  console.log(props, "props");
  return (
    <DeleteButtonStyled onClick={props.deleteBook} hidden={props.disabled}>
      Delete
    </DeleteButtonStyled>
  );
};

export default DeleteButton;
