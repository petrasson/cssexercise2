// Helper to wrap a promise for Suspense

const wrapPromise = (promise) => {
  let status = "pending";
  let result;
  let suspender = promise.then(
    (r) => {
      status = "success";
      result = r;
    },
    (e) => {
      status = "error";
      result = e;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender; // Suspense will handle this as "loading"
      } else if (status === "error") {
        throw result; // Suspense will throw the error
      } else if (status === "success") {
        return result; // Data is ready
      }
    },
  };
};

// Function to fetch card data based on ID and wrap it in the resource
const fetchCard = async (id) => {
  const res = await fetch(
    `https://nextjs-test-beryl-gamma.vercel.app/api/grants?id=${id}`
  );
  if (!res.ok) throw new Error("Failed to fetch card data");
  return res.json();
};

const fetchSimilarCards = async (similiarIds) => {
  if (!similiarIds || similiarIds.length === 0) return [];
  const promises = similiarIds.map(async (id) => {
    const res = await fetch(
      `https://nextjs-test-beryl-gamma.vercel.app/api/grants?id=${id}`
    );
    if (!res.ok) throw new Error(`Failed to fetch similiar card with id ${id}`);
    return res.json();
  });
  return Promise.all(promises);
};

const fetchTransactions = async (transactionIds) => {
  if (!transactionIds || transactionIds.length === 0) return [];
  const promises = transactionIds.map(async (id) => {
    const res = await fetch(
      `https://nextjs-test-beryl-gamma.vercel.app/api/transactions?id=${id}`
    );
    if (!res.ok) throw new Error(`Failed to fetch transaction with id ${id}`);
    return res.json();
  });
  return Promise.all(promises);
};

// Create a function to wrap all data-fetching logic into resources
const createCardResource = (id) => {
  const cardPromise = fetchCard(id);

  return {
    cardData: wrapPromise(cardPromise),
    similiarCards: wrapPromise(
      cardPromise.then((data) => fetchSimilarCards(data.similiar))
    ),
    transactions: wrapPromise(
      cardPromise.then((data) => fetchTransactions(data.transactions))
    ),
  };
};

export { createCardResource };
