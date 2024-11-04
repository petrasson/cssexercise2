import { useState } from 'react';
import styled from 'styled-components';
import Button from './../../../shared-components/Button';

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 30px;

  .sub-title {
    font-size: 34px;
    margin: 90px 0 30px;
  }

  .input-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: var(--primary-bg-color);
    background-color: var(--form-color);
    border: solid var(--form-border-color);
    border-radius: 16px;
    padding: 22px 40px;
    width: 100%;
  }

  .input-box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 16px;
    line-height: 24px;
    margin: 25px 0;
    width: 100%;
    p {
      font-size: 14px;
      margin-top: 10px;
    }
  }

  input,
  textarea {
    border: solid var(--secondary-text-color);
    width: 100%;
    margin-top: 10px;
    padding: 8px;
    font-size: 16px;
    font-family: inherit;
  }

  input {
    height: 30px;
  }

  textarea {
    height: 100px;
    resize: vertical;
  }

  .required {
    color: red;
  }

  .error {
    color: red;
    font-size: 14px;
    margin-bottom: 5px;
  }

  @media and screen (width >= 1305px) {
    padding: 80px .input-wrapper {
      padding: 32px 100px;
    }
  }
`;

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [about, setAbout] = useState('');
  const [links, setLinks] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    let formErrors = {};

    // Check if any required field is empty or if email address is missing an '@'
    if (!name.trim()) {
      formErrors.name = "You haven't added any information.";
    }

    if (!email.trim()) {
      formErrors.email = "You haven't added any information.";
    } else if (!email.includes('@')) {
      formErrors.email = 'Add a valid email address.';
    }

    if (!about.trim()) {
      formErrors.about = "You haven't added any information.";
    }

    // Update the errors state
    setErrors(formErrors);

    // If no errors, proceed
    if (Object.keys(formErrors).length === 0) {
      alert('Form submitted successfully!');
    }
  };

  return (
    <FormWrapper>
      <h3 className="sub-title">Grant application</h3>
      <form onSubmit={handleSubmit} noValidate>
        <div className="input-wrapper">
          <div className="input-box">
            <label>
              Name <span className="required">*</span>
            </label>
            {errors.name && <p className="error">{errors.name}</p>}
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-box">
            <label>
              Email <span className="required">*</span>
            </label>
            {errors.email && <p className="error">{errors.email}</p>}
            <p>Primary contact if applying as a team/company</p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-box">
            <label>
              About You <span className="required">*</span>
            </label>
            {errors.about && <p className="error">{errors.about}</p>}
            <p>Tell us about yourself and/or your team</p>
            <textarea
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            ></textarea>
          </div>
          <div className="input-box">
            <label>Additional Links</label>
            <p>
              If helpful, please share any links about you (e.g., Website,
              GitHub, Twitter)
            </p>
            <textarea
              value={links}
              onChange={(e) => setLinks(e.target.value)}
            ></textarea>
          </div>
          <div className="button-wrapper">
            <Button type="accent" text="Submit" image={false} />
          </div>
        </div>
      </form>
    </FormWrapper>
  );
}

export default Form;
