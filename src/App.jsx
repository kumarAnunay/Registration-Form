import { Children, useState } from "react";
import "./App.css";

function Input(props) {
  const { onChange, ...restProps } = props;
  return <input {...restProps} onChange={onChange || ""} />;
}

function Button(props) {
  const { onClick, children } = props;
  return <button onClick={onClick}>{children}</button>;
}

const App = () => {
  const [formDetails, setFormDetails] = useState({
    firstName: "",
    lastName: "",
    fatherName: "",
    motherName: "",
    dob: "",
    gender: "",
    contact: "",
    email: "",
    aadhar: "",
    education: "",
    address: "",
  });

  const {
    firstName,
    lastName,
    fatherName,
    motherName,
    dob,
    gender,
    contact,
    email,
    aadhar,
    education,
    address,
  } = formDetails;

  const formDetailsHandler = (event) => {
    const field = event.target.name;
    const value = event.target.value;

    setFormDetails({
      ...formDetails,
      [field]: value,
    });
  };

  const formValidation = () => {};

  return (
    <div className="main">
      <div className="container">
        <label htmlFor="firstName">First Name: </label>
        <Input
          type="text"
          id="firstName"
          name="firstName"
          onChange={formDetailsHandler}
          value={firstName}
        />
      </div>

      <div className="container">
        <label htmlFor="lastName">Last Name: </label>
        <Input
          type="text"
          id="lastName"
          name="lastName"
          onChange={formDetailsHandler}
          value={lastName}
        />
      </div>

      <div className="container">
        <label htmlFor="fatherName">Father Name: </label>
        <Input
          type="text"
          name="fatherName"
          id="fatherName"
          onChange={formDetailsHandler}
          value={fatherName}
        />
      </div>

      <div className="container">
        <label htmlFor="motherName">Mother Name: </label>
        <Input
          type="text"
          name="motherName"
          id="motherName"
          onChange={formDetailsHandler}
          value={motherName}
        />
      </div>

      <div className="container">
        <label htmlFor="dob">Date of Birth: </label>
        <Input
          type="date"
          name="dob"
          id="dob"
          onChange={formDetailsHandler}
          value={dob}
        />
      </div>

      <div className="container">
        <div className="label">Gender: </div>
        <div>
          <Input
            type="radio"
            name="gender"
            value={gender}
            id="male"
            onChange={formDetailsHandler}
            className="accentColor"
          />
          <label htmlFor="male" className="gapping">
            Male
          </label>

          <Input
            type="radio"
            name="gender"
            value={gender}
            id="female"
            onChange={formDetailsHandler}
            className="accentColor"
          />
          <label htmlFor="female" className="gapping">
            Female
          </label>
        </div>
      </div>

      <div className="container">
        <label htmlFor="contact">Phone no: </label>
        <Input
          type="tel"
          name="contact"
          id="contact"
          minLength="10"
          maxLength="10"
          onChange={formDetailsHandler}
          value={contact}
        />
      </div>

      <div className="container">
        <label htmlFor="email">Email id: </label>
        <Input
          type="email"
          name="email"
          id="email"
          onChange={formDetailsHandler}
          value={email}
        />
      </div>

      <div className="container">
        <label htmlFor="aadhar">Aadhar No.: </label>
        <Input
          type="tel"
          name="aadhar"
          id="aadhar"
          pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}"
          title="Please write as per aadhar card use(-)"
          minLength="14"
          maxLength="14"
          onChange={formDetailsHandler}
          value={aadhar}
        />
      </div>

      <div className="container">
        <div className="label">Education: </div>
        <div>
          <Input
            type="checkbox"
            name="education"
            value={education}
            id="ten"
            onChange={formDetailsHandler}
            className="accentColor"
          />
          <label htmlFor="ten" className="gapping">
            10
          </label>

          <Input
            type="checkbox"
            name="education"
            value={education}
            id="twelve"
            onChange={formDetailsHandler}
            className="accentColor"
          />
          <label htmlFor="twelve" className="gapping">
            12
          </label>

          <Input
            type="checkbox"
            name="education"
            value={education}
            id="ug"
            onChange={formDetailsHandler}
            className="accentColor"
          />
          <label htmlFor="ug" className="gapping">
            UG
          </label>

          <Input
            type="checkbox"
            name="education"
            value={education}
            id="pg"
            onChange={formDetailsHandler}
            className="accentColor"
          />
          <label htmlFor="pg" className="gapping">
            PG
          </label>
        </div>
      </div>

      <div className="container">
        <label htmlFor="address">Address: </label>
        <textarea
          name="address"
          id="address"
          maxLength="50"
          cols="30"
          rows="2"
          onChange={formDetailsHandler}
          value={address}
        ></textarea>
      </div>

      <div className="btn">
        <Button onClick={formValidation}>Submit</Button>
      </div>
    </div>
  );
};

export { App };
