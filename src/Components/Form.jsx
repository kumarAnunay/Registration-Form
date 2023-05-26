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

  //onChange function to set value
  const formDetailsHandler = (event) => {
    const field = event.target.name;
    const value = event.target.value;

    //This will set error msg empty when start typing again
    if (formDetailsError[field + "Error"]) {
      setFormDetailsError({
        ...formDetailsError,
        [field + "Error"]: "",
      });
    }

    //This will set the  value for the inputs
    setFormDetails({
      ...formDetails,
      [field]: value,
    });

    console.log(field, " : ", value);
  };

  //onClick validation
  const formValidation = (event) => {
    //This will cancels the default action
    event.preventDefault();

    //Regex patterns
    const nameRegex = /^[A-Za-z]+ ?$/;
    const numberRegex = /[9876][0-9]{9}/;
    const aadharRegex = /\d{4}-\d{4}-\d{4}/;
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // const addressRegex = /^[a-zA-Z0-9\s\,\''\-]*$/;

    let {
      firstNameError,
      lastNameError,
      fatherNameError,
      motherNameError,
      dobError,
      genderError,
      categoryError,
      contactError,
      emailError,
      aadharError,
      addressError,
    } = formDetailsError;

    if (firstName.length < 3 || !firstName.match(nameRegex)) {
      firstNameError = "Enter your first name & must contain  only alphabets";
    }

    if (lastName.length < 3 || !lastName.match(nameRegex)) {
      lastNameError = "Enter your last name & must contain  only alphabets";
    }

    if (fatherName.length < 3 || !fatherName.match(nameRegex)) {
      fatherNameError = "Enter your last name & must contain only alphabets";
    }

    if (motherName.length < 3 || !motherName.match(nameRegex)) {
      motherNameError = " Enter your last name & must contain only alphabets";
    }

    if (!dob) {
      dobError = "Date of Birth is required";
    }

    if (!gender) {
      genderError = "Select Gender";
    }

    //education

    if (!category) {
      categoryError = "Select any one category";
    }

    if (!contact.match(numberRegex)) {
      contactError =
        "Phone number length must contains 10 digits and only numbers allowed";
    }

    if (!email.match(emailRegex)) {
      emailError = "Enter valid email address and must contain @";
    }

    if (!aadhar.match(aadharRegex)) {
      aadharError = "Enter aadhar number as per aadhar card, use (-)";
    }

    if (address.length < 5) {
      addressError = "Enter your address";
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

    if (
      firstNameError ||
      lastNameError ||
      fatherNameError ||
      motherNameError ||
      dobError ||
      genderError ||
      categoryError ||
      contactError ||
      emailError ||
      aadharError ||
      addressError
    ) {
      return;
    } else {
      setFormDetails({
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
        address: "",
      });
      alert(`Hey ${firstName} ${lastName} Form submitted successfully!!!`);
    }
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
    <form className="main">
      <div className="container">
        <label htmlFor="firstName">First Name: </label>
        <div>
          <Input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            placeholder="Enter your first name"
            onChange={formDetailsHandler}
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
            value={lastName}
            placeholder="Enter your last name"
            onChange={formDetailsHandler}
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
            value={fatherName}
            placeholder="Enter your father's name"
            onChange={formDetailsHandler}
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
            value={motherName}
            placeholder="Enter your mother's name"
            onChange={formDetailsHandler}
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
            value={dob}
            title="Enter your date-of-birth"
            onChange={formDetailsHandler}
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
            title="Select your category"
            onChange={formDetailsHandler}
          >
            <option value="null">Select option</option>
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
            type="text"
            name="contact"
            id="contact"
            minLength="10"
            maxLength="10"
            value={contact}
            placeholder="Enter your phone number"
            onChange={formDetailsHandler}
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
            value={email}
            placeholder="Enter your email"
            onChange={formDetailsHandler}
          />
          {formDetailsError.emailError && <p>{formDetailsError.emailError}</p>}
        </div>
      </div>

      <div className="container">
        <label htmlFor="aadhar">Aadhar No: </label>
        <div>
          <Input
            type="text"
            name="aadhar"
            id="aadhar"
            value={aadhar}
            minLength="14"
            maxLength="14"
            placeholder="Enter your aadhar number as per aadhar card use(-)"
            onChange={formDetailsHandler}
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
            cols="30"
            value={address}
            placeholder="Enter your address"
            row="5"
            onChange={formDetailsHandler}
          ></textarea>
          {formDetailsError.addressError && (
            <p>{formDetailsError.addressError}</p>
          )}
        </div>
      </div>

      <div className="btn">
        <Button onClick={formValidation}>Submit</Button>
      </div>
    </form>
  );
};

export { Form };
