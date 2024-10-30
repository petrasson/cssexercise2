import BlogCard from "./BlogCard";
import styled from "styled-components";

const CardWrapper = styled.div`
  // max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 0;
  gap: 20px;
  display: grid;
  grid-template-columns: 1fr;

  /*********************************** TABLET VERSION *********************************/

  @media only screen and (width >= 700px) {
    grid-template-columns: repeat(2, 1fr);
  }

  // /*********************************** WEB VERSION *********************************/

  // @media only screen and (width >= 1305px) {
  //   padding: 25px 0;
  //   grid-template-columns: repeat(3, 1fr);
  //   justify-content: start;
  // }
`;

function BlogPosts({ cards }) {
  if (!cards || cards.length === 0) {
    return <div>No blog posts available</div>;
  }
  return (
    <CardWrapper>
      {cards.map((card) => (
        <BlogCard
          key={card.id}
          category={card.category}
          cardTitle={card.title}
          date={card.date}
          // description={card.description}
        />
      ))}
    </CardWrapper>
  );
}

export default BlogPosts;
