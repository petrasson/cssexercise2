import styled from "styled-components";
import FilterControl from "../../../shared-components/FilterControl";
// import Initiatives from "./Initiatives";
import Expenses from "./Expenses";
import { useEffect, useState } from "react";
import { expenses as expensesData } from "../../../../dataExpenses.json";
console.log("expenses", expensesData);

const ExpensesFilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function ExpensesFilter() {
  const [expenses, setExpenses] = useState([]);
  const [filterType, setFilterType] = useState("All");
  const [filteredExpenses, setFilteredExpenses] = useState(expenses);
  console.log("filteredExpenses", filteredExpenses);

  useEffect(() => {
    setExpenses(expensesData); // Only set expenses once when the component mounts
  }, []);

  /*** HANDLE AND UPDATE FILTERED DATA BASED ON STATUS ***/
  const status = expenses.map((exp) => exp.category);
  console.log("status", status);

  //Remove duplicates using Set
  const uniqueStatus = [...new Set(status)];
  console.log("uniqueStatus", uniqueStatus);

  //Create the filterOptions array to pass to the FilterControl
  const filterOptions = uniqueStatus.map((status) => ({
    text: status,
    value: status,
  }));

  const handleFilter = (filterType) => {
    setFilterType(filterType);

    let newFilteredExpenses = expenses;

    if (filterType !== "All") {
      newFilteredExpenses = newFilteredExpenses?.filter(
        (exp) => exp.status === filterType
      );
    }
    setFilteredExpenses(newFilteredExpenses);
  };

  //uppdate filtered data
  useEffect(() => {
    setFilteredExpenses(expenses);
  }, [expenses]);

  return (
    <ExpensesFilterWrapper>
      <FilterControl
        handleFilter={handleFilter}
        filterType={filterType}
        filterOptions={filterOptions}
        withToggle={false}
      />
      <Expenses cards={filteredExpenses} />
    </ExpensesFilterWrapper>
  );
}

export default ExpensesFilter;