import React, { useState } from "react";

const ProfileViewerForm = ({ search }) => {
  const [user, setUser] = useState("");

  const input = document.querySelector("#input");
  const button = document.querySelector("#search-button");

  const handleChange = (e) => {
    setUser(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    search( user );
    setUser("");
   
  };

  return (
    <form id="form-box" onSubmit={handleSubmit}>
      <input
        id="input"
        value={user}
        onChange={handleChange}
        type="text"
      ></input>
      <button id="search-button">search</button>
    </form>
  );
};

export default ProfileViewerForm;
