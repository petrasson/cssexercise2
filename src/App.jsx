import Header from "./components/Header";
import Filter from "./components/Filter";
import Apply from "./components/Apply";
import Button from "./components/Button";
import Footer from "./components/Footer";
import CardHolder from "./components/CardHolder";
import { Container } from "./components/styles/Container.styled";
import React, { useState } from "react";
import "./App.css";
import rData from "../data.json";
console.log("rData", rData);
const { projects } = rData;

function App() {
  const [filteredData, setFilteredData] = useState(projects);
  const [filterType, setFilterType] = useState("All");

  const handleFilter = (filterType) => {
    console.log(filterType, "filterType");
    setFilterType(filterType);
    if (filterType === "All") {
      setFilteredData(projects);
    } else {
      const newFilteredData = rData.filter(
        (item) => item.category === filterType
      );
      setFilteredData(newFilteredData);
      console.log("newFilteredData", newFilteredData);
    }
  };

  return (
    <>
      <Header />
      <Container>
        <h1 className='title'>Funded grants</h1>
        <div className='mid-wrapper'>
          <div className='filter-container'>
            <Button
              className='button _primary'
              text='All'
              type='primary'
              filterType='All'
              onClick={() => handleFilter("All")}
            />
            <Filter handleFilter={handleFilter} />
          </div>
          <div className='toggle-wrapper'>
            <input
              type='checkbox'
              id='toggle'
              aria-label='Show only completed'
            />
            <label htmlFor='toggle' className='toggle-text'>
              Show only completed
            </label>
          </div>
        </div>
        <CardHolder data={filteredData} />
        <section className='card-grid-section'></section>
        <Apply />
      </Container>
      <Footer />
    </>
  );
}

export default App;
