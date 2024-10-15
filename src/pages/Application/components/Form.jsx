import styled from "styled-components";

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  .sub-title {
    // font-family: "Space Mono", sans-serif;
    // color: var(--secondary-text-color);
    font-size: 40px;
    margin: 90px 0 30px;
  }

  .input-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: var(--primary-bg-color);
    background-color: var(--form-color);
    border: solid var(--border-color);
    border-radius: 16px;
    padding: 32px 100px;
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
    border: solid blue;
  }

  input {
    border: solid var(--secondary-text-color);
    height: 30px;
    width: 100%;
  }
  // .avatar-container {
  //   display: flex;
  //   flex-direction: row;
  //   position: absolute;
  //   bottom: 8px;
  //   left: 26px;
  //   margin: 0;
  //   padding: 0;
  //   margin: 0 -9px;
  // }

  // .image-avatar-wrapper {
  //   display: flex;
  //   flex-direction: row;
  //   margin: 0 -9px;
  // }

  // .avatar-image {
  //   width: 40px;
  //   height: 40px;
  //   border-radius: 50%;
  //   object-fit: cover;
  //   margin: 0;
  // }

  // .purple-circle {
  //   background-color: var(--accent-color);
  //   border-radius: 50%;
  //   height: 40px;
  //   width: 40px;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   border: solid 2px var(--secondary-bg-color);
  //   margin: 0 -9px;
  // }

  // .attendee-number {
  //   font-size: 12px;
  // }

  // @media only screen and (width >= 1305px) {
  //   .card-title {
  //     font-size: 24px;
  //   }
  // }
`;

function Form() {
  return (
    <FormWrapper>
      <h3 className='sub-title'>Grant application</h3>
      <div className='input-wrapper'>
        <div class='input-box'>
          <label>Name</label>
          <input type='text' required />
          <i class='bx bxs-user'></i>
        </div>
        <div class='input-box'>
          <label>Email</label>
          <p> Primary contact if applying as a team/company</p>
          <input type='email' required />
          <i class='bx bxs-user'></i>
        </div>
        <div class='input-box'>
          <label>About You</label>
          <p>Tell us about yourself and/or your team</p>
          <input type='text' required />
          <i class='bx bxs-user'></i>
        </div>
        <div class='input-box'>
          <label>Additinal Links</label>
          <p>
            If helpful, please share any links about you (e.g. Website, GitHub,
            Twitter)
          </p>
          <input type='text' required />
          <i class='bx bxs-user'></i>
        </div>
      </div>
    </FormWrapper>
  );
}

export default Form;
