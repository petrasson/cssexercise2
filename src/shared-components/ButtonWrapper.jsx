import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  color: var(--primary-text-color);
  }
`;

const NavButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;
    padding: 16px 0;
    gap: 20px;

    .link {
    text-decoration: none;
     color: var(--primary-text-color);
    }
    
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    padding: 10px;
    font-size: 16px;
    background-color: var(--secondary-bg-color);
    border-radius: 30px;
}

  .button-image {
    margin-right: 10px;
    width: 40px;
    height: auto;
    margin: 0;
  }

  .content .button-name {
    margin: 0 10px;
    }
  }
`;

function ButtonWrapper({ items }) {
  return (
    <NavButtonWrapper>
      {items.map((item, index) => {
        const isExternalLink = item.link.startsWith("http");
        return isExternalLink ? (
          <a
            key={index}
            href={item.link}
            target='_blank'
            rel='noopener noreferrer'
            className='link'
          >
            <div className='content'>
              {item.imageSrc && (
                <img
                  src={item.imageSrc}
                  alt={item.imageAlt || ""}
                  className='button-image'
                />
              )}
              <p className='button-name'>{item.text}</p>
            </div>
          </a>
        ) : (
          <StyledLink key={index} to={item.link} className='link'>
            <div className='content'>
              {item.imageSrc && (
                <img
                  src={item.imageSrc}
                  alt={item.imageAlt || ""}
                  className='button-image'
                />
              )}
              <p className='button-name'>{item.text}</p>
            </div>
          </StyledLink>
        );
      })}
    </NavButtonWrapper>
  );
}

export default ButtonWrapper;

// function ButtonWrapper({ items }) {
//   return (
//     <NavButtonWrapper>
//       {items.map((item, index) => (
//         <StyledLink key={item.id} to={`/grantee/${c.id}`}>
//           <div key={index} className='content'>
//             <img
//               src={`/images/${c.id}.png`}
//               alt='aria-hidden'
//               className='button-image'
//             />
//             <p className='button-name'>{c.name}</p>
//           </div>
//         </StyledLink>
//       ))}
//     </NavButtonWrapper>
//   );
// }
