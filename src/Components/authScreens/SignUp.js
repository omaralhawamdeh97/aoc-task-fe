import React, { useState } from "react";
import { AddBookDiv, Button } from "../../styles";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signup } from "../../store/actions/authActions";

function SignUp() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState();

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signup(user, history));
  };
  return (
    <form onSubmit={handleSubmit}>
      <AddBookDiv>
        <h2>Sign up </h2>
        <input
          onChange={handleChange}
          type="text"
          name="username"
          placeholder="enter username"
        />
        <input
          onChange={handleChange}
          type="password"
          name="password"
          placeholder="enter password"
        />
        <Button type="submit"> Submit</Button>
      </AddBookDiv>
    </form>
  );
}

export default SignUp;
