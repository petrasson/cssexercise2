import styled from "styled-components";

const NavButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;
    padding: 16px 0;
    gap: 20px;
    
  .content {
    background-color: var(--secondary-bg-color);
    border-radius: 30px;
    padding: 5px 10px 5px 5px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
}

  .button-image {
    margin-right: 10px;
    width: 30px;
    height: auto;
    margin: 0;
  }

  .content .button-name {
    margin: 0 10px;
    }
  }
`;

function ButtonWrapper({ content }) {
  return (
    <NavButtonWrapper>
      {content.map((c, index) => (
        <div key={index} className='content'>
          <img
            src={`/images/${c}.png`}
            alt='aria-hidden'
            className='button-image'
          />
          <p className='button-name'>{c}</p>
        </div>
      ))}
    </NavButtonWrapper>
  );
}

export default ButtonWrapper;
