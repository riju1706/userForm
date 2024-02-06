import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/userSlice";
import "./form.css";

export default function Form() {
  const [userData, setUserData] = useState({
    name: "",
    address: "",
    mobile: "",
    email: "",
    message: "",
  });
  const dispatch = useDispatch();
  const submitHandeler = (e) => {
    e.preventDefault();
    dispatch(addUser(userData));
    alert("your information has been saved");
    setUserData({
      name: "",
      address: "",
      mobile: "",
      email: "",
      message: "",
    });
  };
  const onChangeHandeler = (e) => {
    const { name, value } = e.target;
    setUserData((d) => ({ ...d, [name]: value }));
  };
  return (
    <div className="container">
      <form onSubmit={submitHandeler} className="formContainer">
        <div className="InputContainer">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={userData.name}
            onChange={onChangeHandeler}
            placeholder="abc"
          />
        </div>
        <div className="InputContainer">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={userData.address}
            onChange={onChangeHandeler}
            placeholder="address"
          />
        </div>
        <div className="InputContainer">
          <label htmlFor="mobile">Mobile:</label>
          <input
            type="number"
            id="mobile"
            name="mobile"
            value={userData.mobile}
            onChange={onChangeHandeler}
            placeholder="123"
          />
        </div>
        <div className="InputContainer">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={onChangeHandeler}
            placeholder="abc@test.com"
          />
        </div>
        <div className="InputContainer">
          <label htmlFor="message">Message:</label>
          <textarea
            type="text"
            id="message"
            name="message"
            value={userData.message}
            onChange={onChangeHandeler}
            placeholder="abc"
          />
        </div>

        <button type="submit">Add</button>
      </form>
    </div>
  );
}
