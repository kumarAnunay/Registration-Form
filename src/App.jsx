import { Children, useState } from "react";
import "./App.css";

function Input(props) {
  const { onChange, ...restProps } = props;
  return <input {...restProps} onChange={onChange} />;
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
    category: "",
    contact: "",
    email: "",
    aadhar: "",
    educationChecked: "",
    address: "",
  });

  const formDetailsHandler = (event) => {
    const field = event.target.name;
    const value = event.target.value;

    setFormDetails({
      ...formDetails,
      [field]: value,
    });

    console.log(field, " : ", value);
  };

  const formValidation = () => {};

  const {
    firstName,
    lastName,
    fatherName,
    motherName,
    dob,
    gender,
    category,
    contact,
    email,
    aadhar,
    educationChecked,
    address,
  } = formDetails;

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
          title="Enter your first name"
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
          title="Enter your last name"
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
          title="Enter your father's name"
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
          title="Enter your mother's name"
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
          title="Enter your date-of-birth"
        />
      </div>

      <div className="container">
        <div className="label">Gender: </div>
        <div>
          <Input
            type="radio"
            name="gender"
            value="male"
            id="male"
            checked={gender === "male"}
            onChange={formDetailsHandler}
            className="accentColor"
          />
          <label htmlFor="male" className="gapping">
            Male
          </label>

          <Input
            type="radio"
            name="gender"
            value="female"
            id="female"
            checked={gender === "female"}
            onChange={formDetailsHandler}
            className="accentColor"
          />
          <label htmlFor="female" className="gapping">
            Female
          </label>
        </div>
      </div>

      <div className="container">
        <label htmlFor="category">Category: </label>
        <select
          name="category"
          id="category"
          value={category}
          onChange={formDetailsHandler}
          title="Select your category"
        >
          <option value="null"></option>
          <option value="general">General</option>
          <option value="obc">OBC</option>
          <option value="sc">SC</option>
          <option value="st">ST</option>
        </select>
      </div>

      <div className="container">
        <div className="label">Education: </div>
        <div>
          <Input
            type="checkbox"
            name="education"
            value="10"
            id="10"
            // checked={educationChecked}
            onChange={formDetailsHandler}
            className="accentColor"
          />
          <label htmlFor="10" className="gapping">
            10
          </label>

          <Input
            type="checkbox"
            name="education"
            value="12"
            id="12"
            // checked={educationChecked}
            onChange={formDetailsHandler}
            className="accentColor"
          />
          <label htmlFor="12" className="gapping">
            12
          </label>

          <Input
            type="checkbox"
            name="education"
            value="ug"
            id="ug"
            // checked={educationChecked}
            onChange={formDetailsHandler}
            className="accentColor"
          />
          <label htmlFor="ug" className="gapping">
            UG
          </label>

          <Input
            type="checkbox"
            name="education"
            value="pg"
            id="pg"
            // checked={educationChecked}
            onChange={formDetailsHandler}
            className="accentColor"
          />
          <label htmlFor="pg" className="gapping">
            PG
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
          title="Enter your phone number"
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
          title="Enter your email"
        />
      </div>

      <div className="container">
        <label htmlFor="aadhar">Aadhar No.: </label>
        <Input
          type="tel"
          name="aadhar"
          id="aadhar"
          minLength="14"
          maxLength="14"
          onChange={formDetailsHandler}
          value={aadhar}
          pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}"
          title="Enter your aadhar number as per aadhar card use(-)"
        />
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
          title="Enter your address"
        ></textarea>
      </div>

      <div className="btn">
        <Button onClick={formValidation}>Submit</Button>
      </div>
    </div>
  );
};

export { App };
