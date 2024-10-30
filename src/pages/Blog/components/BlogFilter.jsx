import styled from "styled-components";
import FilterControl from "../../../shared-components/FilterControl";
import BlogPosts from "./BlogPosts";
import Button from "./../../../shared-components/Button";
import { useEffect, useState } from "react";
import { blogs as BlogData } from "../../../../dataBlogs.json";

const BlogFilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  align-content: center;
  width: 100%;
  gap: 20px;
`;

function BlogFilter() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [filterType, setFilterType] = useState("All");
  const [filteredBlogPosts, setFilteredBlogPosts] = useState(blogPosts);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    setBlogPosts(BlogData); // Only set blogPosts once when the component mounts
  }, []);

  /*** HANDLE AND UPDATE FILTERED DATA BASED ON TYPE ***/
  const typeOfNews = blogPosts.map((exp) => exp.category);

  //Remove duplicates using Set
  const uniqueType = [...new Set(typeOfNews)];

  //Create the filterOptions array to pass to the FilterControl
  const filterOptions = uniqueType.map((type) => ({
    text: type,
    value: type,
  }));

  const handleFilter = (filterType) => {
    setFilterType(filterType);

    let newFilteredBlogPosts = blogPosts;

    if (filterType !== "All") {
      newFilteredBlogPosts = newFilteredBlogPosts?.filter(
        (exp) => exp.category === filterType
      );
    }
    setFilteredBlogPosts(newFilteredBlogPosts);
    setShowAll(false);
  };

  //uppdate filtered data
  useEffect(() => {
    setFilteredBlogPosts(blogPosts);
  }, [blogPosts]);

  const cardsToShow = showAll
    ? filteredBlogPosts
    : filteredBlogPosts.slice(0, 6);

  return (
    <BlogFilterWrapper>
      <FilterControl
        handleFilter={handleFilter}
        filterType={filterType}
        filterOptions={filterOptions}
        withToggle={false}
      />
      <BlogPosts cards={cardsToShow} />
      {filteredBlogPosts.length > 6 && !showAll && (
        <Button
          type='primary'
          text='Load more posts'
          onClick={() => setShowAll(true)}
        />
      )}
    </BlogFilterWrapper>
  );
}

export default BlogFilter;
