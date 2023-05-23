import { useState } from "react";
import "./Form.css";

function Input(props) {
  const { onChange, ...restProps } = props;
  return <input {...restProps} onChange={onChange} />;
}

function Button(props) {
  const { onClick, children } = props;
  return <button onClick={onClick}>{children}</button>;
}

const Form = () => {
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
    // education: "",
    address: "",
  });

  const [formDetailsError, setFormDetailsError] = useState({
    firstNameError: "",
    lastNameError: "",
    fatherNameError: "",
    motherNameError: "",
    dobError: "",
    genderError: "",
    categoryError: "",
    contactError: "",
    emailError: "",
    aadharError: "",
    // educationError: "",
    addressError: "",
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

  const formValidation = (event) => {
    event.preventDefault();

    const nameRegex = /^[a-zA-Z]+ ?([a-zA-Z]+$){1}/;
    const numberRegex = /^[0-9]/;
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const addressRegex = /^[a-zA-Z0-9\s\,\''\-]*$/;

    let firstNameError = "";
    let lastNameError = "";
    let fatherNameError = "";
    let motherNameError = "";
    let dobError = "";
    let genderError = "";
    // let educationError = "";
    let categoryError = "";
    let contactError = "";
    let emailError = "";
    let aadharError = "";
    let addressError = "";

    if (firstName.length < 2 || !firstName.match(nameRegex)) {
      firstNameError = "Only alphabets and at least  2 characters";
    }

    if (lastName.length < 2 || !lastName.match(nameRegex)) {
      lastNameError = "Only alphabets and at least 2 characters";
    }

    if (fatherName.length < 2 || !fatherName.match(nameRegex)) {
      fatherNameError = "Only alphabets and at least 2 characters";
    }

    if (motherName.length < 2 || !motherName.match(nameRegex)) {
      motherNameError = "Only alphabets and at least 2 characters";
    }

    if (!dob) {
      dobError = "Date of Birth is required";
    }

    if (!gender) {
      genderError = "Gender is required";
    }

    //education

    if (!category) {
      categoryError = "Select any one category";
    }

    if (contact.length != 10 || !contact.match(numberRegex)) {
      contactError = "Phone number length must be 10";
    }

    if (!email.match(nameRegex)) {
      emailError = "Enter valid email address";
    }

    if (aadhar.length != 12 || !motherName.match(aadharRegex)) {
      aadharError = "Enter aadhar number as per aadhar card, use (-)";
    }

    if (address.match(addressRegex)) {
      addressError = "Write your permanent address";
    }

    setFormDetailsError({
      firstNameError,
      lastNameError,
      fatherNameError,
      motherNameError,
      dobError,
      genderError,
      //   educationError,
      categoryError,
      contactError,
      emailError,
      aadharError,
      addressError,
    });
  };

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
    // educationChecked,
    address,
  } = formDetails;

  return (
    <div className="main">
      <div className="container">
        <label htmlFor="firstName">First Name: </label>
        <div>
          <Input
            type="text"
            id="firstName"
            name="firstName"
            onChange={formDetailsHandler}
            value={firstName}
            placeholder="Enter your first name"
          />
          {formDetailsError.firstNameError && (
            <p>{formDetailsError.firstNameError}</p>
          )}
        </div>
      </div>

      <div className="container">
        <label htmlFor="lastName">Last Name: </label>
        <div>
          <Input
            type="text"
            id="lastName"
            name="lastName"
            onChange={formDetailsHandler}
            value={lastName}
            placeholder="Enter your last name"
          />
          {formDetailsError.lastNameError && (
            <p>{formDetailsError.lastNameError}</p>
          )}
        </div>
      </div>

      <div className="container">
        <label htmlFor="fatherName">Father Name: </label>
        <div>
          <Input
            type="text"
            name="fatherName"
            id="fatherName"
            onChange={formDetailsHandler}
            value={fatherName}
            placeholder="Enter your father's name"
          />
          {formDetailsError.fatherNameError && (
            <p>{formDetailsError.fatherNameError}</p>
          )}
        </div>
      </div>

      <div className="container">
        <label htmlFor="motherName">Mother Name: </label>
        <div>
          <Input
            type="text"
            name="motherName"
            id="motherName"
            onChange={formDetailsHandler}
            value={motherName}
            placeholder="Enter your mother's name"
          />
          {formDetailsError.motherNameError && (
            <p>{formDetailsError.motherNameError}</p>
          )}
        </div>
      </div>

      <div className="container">
        <label htmlFor="dob">Date of Birth: </label>
        <div>
          <Input
            type="date"
            name="dob"
            id="dob"
            onChange={formDetailsHandler}
            value={dob}
            title="Enter your date-of-birth"
          />
          {formDetailsError.dobError && <p>{formDetailsError.dobError}</p>}
        </div>
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

          {formDetailsError.genderError && (
            <p>{formDetailsError.genderError}</p>
          )}
        </div>
      </div>

      {/* <div className="container">
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
      </div> */}

      <div className="container">
        <label htmlFor="category">Category: </label>
        <div>
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
          {formDetailsError.categoryError && (
            <p>{formDetailsError.categoryError}</p>
          )}
        </div>
      </div>

      <div className="container">
        <label htmlFor="contact">Phone no: </label>
        <div>
          <Input
            type="tel"
            name="contact"
            id="contact"
            onChange={formDetailsHandler}
            value={contact}
            placeholder="Enter your phone number"
          />
          {formDetailsError.contactError && (
            <p>{formDetailsError.contactError}</p>
          )}
        </div>
      </div>

      <div className="container">
        <label htmlFor="email">Email id: </label>
        <div>
          <Input
            type="email"
            name="email"
            id="email"
            onChange={formDetailsHandler}
            value={email}
            placeholder="Enter your email"
          />
          {formDetailsError.emailError && <p>{formDetailsError.emailError}</p>}
        </div>
      </div>

      <div className="container">
        <label htmlFor="aadhar">Aadhar No.: </label>
        <div>
          <Input
            type="tel"
            name="aadhar"
            id="aadhar"
            minLength="14"
            maxLength="14"
            onChange={formDetailsHandler}
            value={aadhar}
            pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}"
            placeholder="Enter your aadhar number as per aadhar card use(-)"
          />
          {formDetailsError.aadharError && (
            <p>{formDetailsError.aadharError}</p>
          )}
        </div>
      </div>

      <div className="container">
        <label htmlFor="address">Address: </label>
        <div>
          <textarea
            name="address"
            id="address"
            maxLength="50"
            cols="30"
            rows="2"
            onChange={formDetailsHandler}
            value={address}
            placeholder="Enter your address"
          ></textarea>
          {formDetailsError.addressError && (
            <p>{formDetailsError.addressError}</p>
          )}
        </div>
      </div>

      <div className="btn">
        <Button onClick={formValidation}>Submit</Button>
      </div>
    </div>
  );
};

export { Form };