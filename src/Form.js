import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  // Initialize the state as an object with name, id, and age
  const [user, setUser] = useState({
    name: "",
    id: null,
    age: null
  });
  // Handle input changes and update the state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value, // Dynamically update based on the input name
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page
    axios
      .post("http://localhost:6700/adduser", user)
      .then((response) => {
        console.log("User added:", response.data.message);
      })
      .catch((error) => {
        console.error("There was an error adding the user:",  error.response ? error.response.data : error.message);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={user.name}
        onChange={handleChange}
      />
      <input
        type="number"
        name="id"
        placeholder="ID"
        value={user.id}
        onChange={handleChange}
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={user.age}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
