//fetching all Discover Initiatives
export const fetchInitiatives = async () => {
  try {
    const res = await fetch(
      `https://nextjs-test-beryl-gamma.vercel.app/api/initiatives`
    );

    if (!res.ok) throw new Error("Failed to fetch initiatives data");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error in fetching initiatives:", error);
    throw error;
  }
};

//fetching all Funded grants
export const fetchGrants = async () => {
  try {
    const res = await fetch(
      `https://nextjs-test-beryl-gamma.vercel.app/api/grants`
    );

    if (!res.ok) throw new Error("Failed to fetch all card data");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error in fetching all cardData:", error);
    throw error;
  }
};

//fetching grants detailed data based cardIds
export const fetchSimilarCards = async (similiarIds) => {
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

//fetching one detaild card info based on id
export const fetchCard = async (id) => {
  try {
    const res = await fetch(
      `https://nextjs-test-beryl-gamma.vercel.app/api/grants?id=${id}`
    );

    if (!res.ok) throw new Error("Failed to fetch card data");

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error in fetchCard:", error);
    throw error;
  }
};

//fetching transaction data based transactionsIds
export const fetchTransactions = async (transactionIds) => {
  if (!transactionIds || transactionIds.length === 0) return [];
  const promises = transactionIds.map(async (id) => {
    const res = await fetch(
      `https://nextjs-test-beryl-gamma.vercel.app/api/transactions?id=${id}`
    );
    if (!res.ok) throw new Error(`Failed to fetch transaction with id ${id}`);
    const transaction = await res.json();
    return transaction;
  });
  return Promise.all(promises);
};

//fetching Grantees detaild data based on userIds
export const fetchGrantees = async (userIds) => {
  if (!userIds || userIds.length === 0) return [];
  const promises = userIds.map(async (id) => {
    const res = await fetch(
      `https://nextjs-test-beryl-gamma.vercel.app/api/grantees?id=${id}`
    );
    if (!res.ok) throw new Error(`Failed to fetch userinfo with id ${id}`);
    const userData = await res.json();
    return userData;
  });
  return Promise.all(promises);
};

/*Fråga: onödigt att ha en separat fetch för bara en användare*/
//fetching one Grantee data based on userId
export const fetchGrantee = async (id) => {
  try {
    const res = await fetch(
      `https://nextjs-test-beryl-gamma.vercel.app/api/grantees?id=${id}`
    );

    if (!res.ok) throw new Error("Failed to fetch user data");

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error in fetchCard:", error);
    throw error;
  }
};
