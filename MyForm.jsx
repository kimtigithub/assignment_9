import React, { useState } from "react";

function MyForm() {
  const [mail, setMail] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPass] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Email: ${mail}\nName: ${name}\nSurname: ${surname}\nPhone: ${phone}\nPassword: ${"*".repeat(
        password.length
      )}`
    );
  };
  const handleMail = (event) => {
    setMail(event.target.value);
  };
  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleSurname = (event) => {
    setSurname(event.target.value);
  };
  const handlePhone = (event) => {
    const inputNum = event.target.value;
    if (inputNum.length <= 10) {
      setPhone(inputNum);
    }
  };
  const handlePass = (event) => {
    setPass(event.target.value);
  };
  return (
    <div className="containerForm">
      <form onSubmit={handleSubmit}>
        <label>
          Email address:
          <input
            type="text"
            value={mail}
            onChange={handleMail}
            required
          ></input>
        </label>
        <p></p>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={handleName}
            required
          ></input>
        </label>
        <p></p>
        <label>
          Surname:
          <input
            type="text"
            value={surname}
            onChange={handleSurname}
            required
          ></input>
        </label>
        <p></p>
        <label>
          Phone number:
          <input
            type="number"
            value={phone}
            maxLength="10"
            onChange={handlePhone}
            required
          ></input>
        </label>
        <p></p>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePass}
            required
          ></input>
        </label>
        <p></p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MyForm;
