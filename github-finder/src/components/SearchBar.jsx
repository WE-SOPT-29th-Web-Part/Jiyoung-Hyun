import React, { useState } from "react";
import Styled from "styled-components";
import axios from "axios";

const SearchBar = ({ setUserInfo }) => {
  const [user, setUser] = useState("");
  const handleChange = (e) => {
    setUser(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data } = await axios.get(`https://api.github.com/users/shji023`);
    setUserInfo(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={user}
        onChange={handleChange}
        placeholder="Github ID"
      ></Input>
    </form>
  );
};

const Input = Styled.input`
  border: none;
  border-bottom: 2px solid #304b1b;
  margin-right: 50px;
  width: 350px;
  font-size: 24px;
  font-family: 'ZenAntique';
  :focus {
    outline:none;
  }
`;

export default SearchBar;
