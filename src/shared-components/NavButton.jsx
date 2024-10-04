import styled from "styled-components";

const NavButtonWrapper = styled.div`
  
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;
    padding: 16px 0;
    gap: 20px;
  

  .attendee {
    background-color: var(--secondary-bg-color);
    border-radius: 30px;
    padding: 5px 10px 5px 5px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .avatar-image {
    margin-right: 10px;
  }

  .attendee-name {
    margin: 0 10px 0 5px;
  }
    }
`;

function NavButton({ attendees }) {
  console.log("attendees", attendees);
  return (
    <NavButtonWrapper>
      {attendees.map((attendee, index) => (
        <div key={index} className='attendee'>
          <img
            src={`/images/${attendee}.png`}
            alt='image of attendee'
            className='avatar-image'
          />
          <p className='attendee-name'>{attendee}</p>
        </div>
      ))}
    </NavButtonWrapper>
  );
}

export default NavButton;
