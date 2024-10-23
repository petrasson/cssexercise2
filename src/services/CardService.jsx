//fetching all detaild card info based on id
export const fetchCard = async (id) => {
  try {
    const res = await fetch(
      `https://nextjs-test-beryl-gamma.vercel.app/api/grants?id=${id}`
    );

    if (!res.ok) throw new Error("Failed to fetch card data");

    const data = await res.json();
    console.log("Fetched card data:", data); // Log the actual card data
    return data;
  } catch (error) {
    console.error("Error in fetchCard:", error);
    throw error;
  }
};

//fetching similar grant data based on data I get from fetchCard above
export const fetchSimilarCards = async (similiarIds) => {
  console.log("I can see this", similiarIds);
  if (!similiarIds || similiarIds.length === 0) return [];
  const promises = similiarIds.map(async (id) => {
    const res = await fetch(
      `https://nextjs-test-beryl-gamma.vercel.app/api/grants?id=${id}`
    );
    console.log("I can see this", promises);
    if (!res.ok) throw new Error(`Failed to fetch similiar card with id ${id}`);
    return res.json();
  });
  return Promise.all(promises);
};

//fetching transaction data based on the data I get from fetchCard above
export const fetchTransactions = async (transactionIds) => {
  console.log(
    "I see this as well, Fetching transactoin data for IDs:",
    transactionIds
  );

  if (!transactionIds || transactionIds.length === 0) return [];
  const promises = transactionIds.map(async (id) => {
    const res = await fetch(
      `https://nextjs-test-beryl-gamma.vercel.app/api/transactions?id=${id}`
    );
    if (!res.ok) throw new Error(`Failed to fetch transaction with id ${id}`);
    const transaction = await res.json();
    console.log(`Fetched transaction for id ${id}:`, transaction); // Log each transaction object
    return transaction;
  });
  return Promise.all(promises);
};
