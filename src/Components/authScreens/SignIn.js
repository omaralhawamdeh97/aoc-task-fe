import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AddBookDiv, Button } from "../../styles";
import { signIn } from "../../store/actions/authActions";

function SignIn() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState();

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signIn(user, history));
  };
  return (
    <form onSubmit={handleSubmit}>
      <AddBookDiv>
        <h2>Sign in </h2>
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
        <Button type="submit"> Enter</Button>
      </AddBookDiv>
    </form>
  );
}

export default SignIn;
