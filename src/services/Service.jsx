//fetching all Discover Initiatives
import useSWR from 'swr';
const fetcher = (...args) => fetch(...args).then((res) => res.json());
const API_URL = 'https://nextjs-test-beryl-gamma.vercel.app/api';

export const useFetchAllInitiatives = () => {
  const { data } = useSWR(`${API_URL}/initiatives`, fetcher, {
    suspense: true,
  });

  return data;
};

//fetching all Funded grants
export const fetchAllGrants = async () => {
  try {
    const res = await fetch(
      `https://nextjs-test-beryl-gamma.vercel.app/api/grants`,
    );

    if (!res.ok) throw new Error('Failed to fetch all card data');
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error in fetching all cardData:', error);
    throw error;
  }
};

//fetching grants detailed data based cardIds
export const fetchGrants = async (grantsIds) => {
  if (!grantsIds || grantsIds.length === 0) return [];
  const promises = grantsIds.map(async (id) => {
    const res = await fetch(
      `https://nextjs-test-beryl-gamma.vercel.app/api/grants?id=${id}`,
    );
    if (!res.ok) throw new Error(`Failed to fetch cards with id ${id}`);
    return res.json();
  });
  return Promise.all(promises);
};

//fetching one detaild card info based on id
export const fetchGrant = async (id) => {
  try {
    const res = await fetch(
      `https://nextjs-test-beryl-gamma.vercel.app/api/grants?id=${id}`,
    );

    if (!res.ok) throw new Error('Failed to fetch card data');

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error in fetchGrant:', error);
    throw error;
  }
};

//fetching transaction data based transactionsIds
export const fetchTransactions = async (transactionIds) => {
  if (!transactionIds || transactionIds.length === 0) return [];
  const promises = transactionIds.map(async (id) => {
    const res = await fetch(
      `https://nextjs-test-beryl-gamma.vercel.app/api/transactions?id=${id}`,
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
      `https://nextjs-test-beryl-gamma.vercel.app/api/grantees?id=${id}`,
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
      `https://nextjs-test-beryl-gamma.vercel.app/api/grantees?id=${id}`,
    );

    if (!res.ok) throw new Error('Failed to fetch user data');

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error in fetchGrant:', error);
    throw error;
  }
};
