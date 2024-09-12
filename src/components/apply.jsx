import Button from "./button";
// import styled from "styled-components";

function Apply() {
  const handleApply = () => {
    alert("Button clicked: you will now apply for a grant application");
  };

  return (
    <Button text='Apply for grant' type='secondary' onClick={handleApply} />
  );
}

export default Apply;

// <section className='apply-wrapper'>
// <div className='apply-inner'>
//   <p className='apply-text'>Have a project in mind?</p>
//   <p className='apply-title'>Let’s create something awesome.</p>
//   <Button />
// </div>
// </section>

/**Button in apply*/

// <button className='button _secondary'>
//     Apply for grant
//     <img
//       src='images/arrowb-rigth.svg'
//       aria-hidden='true'
//       className='arrowb-right'
//     />
//   </button>
