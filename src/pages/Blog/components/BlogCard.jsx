import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 16px;
  border: solid var(--border-color);
  background-color: var(--secondary-bg-color);
  height: 495px;
  width: 100%;
  text-align: left;
  position: relative;
  overflow: hidden;
  flex: 1;

  .blog-img {
    position: relative;
    background-color: var(--primary-bg-color);
    background-image: linear-gradient(
        rgb(255 255 255 / 10%) 1px,
        transparent 1px
      ),
      linear-gradient(90deg, rgb(255 255 255 / 10%) 1px, transparent 1px);
    background-size: 23px 23px;
    width: 100%;
    border-radius: 16px;
    padding: 20px 0 70px 90px;

    /* Apply the arrow background once here */
    ::before {
      content: "";
      position: absolute;
      background-image: url("/images/circleBlog.png");
      background-repeat: no-repeat;
      background-size: contain;
      width: 452px;
      height: 452px;
      top: 151%;
      left: 36%;
      transform: translate(-50%, -50%);
      z-index: -1;
      opacity: 0.2;
    }
  }

  /* New .blog-img-content wrapper */
  .blog-img-content {
    position: relative;
    z-index: 1; /* Ensures text is above the arrow */
  }

  .top-title {
    color: var(--secondary-text-color);
    font-size: 16px;
    margin: 40px 0 20px 0;
  }

  .title {
    color: var(--primary-text-color);
    font-size: 40px;
    font-weight: 700;
    margin: 14px 0;
  }

  .text-wrapper {
    padding: 15px 25px 0;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .sub-title {
    font-family: "Space Mono", sans-serif;
    color: var(--secondary-text-color);
    font-size: 16px;
    margin-top: auto;
    margin-bottom: 25px;
  }

  .card-title {
    font-size: 20px;
    font-weight: 700;
    line-height: 32px;
    margin: 8px 0;
  }

  .card-category {
    margin: 8px 0;
  }
`;

function BlogCard({ category, date, cardTitle, similiar }) {
  return (
    <CardWrapper>
      <div className='blog-img'>
        {/* Wrapping text content inside .blog-img-content */}
        <div className='blog-img-content'>
          <p className='top-title'>Funding Round</p>
          <p className='title'>{cardTitle}</p>
          <p className='title'>of approvals</p>
        </div>
      </div>

      <div className='text-wrapper'>
        <p className='card-category'>{category}</p>
        <p className='card-title'>{cardTitle}</p>
        <p className='sub-title'>Date: {date}</p>
      </div>
    </CardWrapper>
  );
}

export default BlogCard;
