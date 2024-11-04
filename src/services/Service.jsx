import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const useAllInitiatives = () => {
  const { data, error } = useSWR(
    "https://nextjs-test-beryl-gamma.vercel.app/api/initiatives",
    fetcher,
    { suspense: true }
  );
  return {
    data,
    error,
    isLoading: !error && !data,
  };
};

//fetching all Funded grants
export const useAllGrants = () => {
  const { data, error } = useSWR(
    `https://nextjs-test-beryl-gamma.vercel.app/api/grants`,
    fetcher,
    { suspense: true }
  );
  return {
    data,
    error,
    isLoading: !error && !data,
  };
};

// fetch one grantee

export const useGranteeDetails = (id) => {
  const { data, error } = useSWR(
    `https://nextjs-test-beryl-gamma.vercel.app/api/grantees?id=${id}`,
    fetcher,
    { suspense: true }
  );
  return {
    data,
    error,
    isLoading: !error && !data,
  };
};

// export const useGranteeDetailss = () => {
//   const { data, error } = useSWR(
//     `https://nextjs-test-beryl-gamma.vercel.app/api/grants?ids=1,2,3`,
//     fetcher,
//     { suspense: true }
//   );
//   return {
//     data,
//     error,
//     isLoading: !error && !data,
//   };
// };

// fetch some grants

export const useGrantsDetails = (grantsIds) => {
  const shouldFetch = grantsIds.length > 0;

  const { data, error } = useSWR(
    shouldFetch
      ? () =>
          Promise.all(
            grantsIds.map((id) =>
              fetcher(
                `https://nextjs-test-beryl-gamma.vercel.app/api/grants?id=${id}`
              )
            )
          )
      : null,
    { suspense: true }
  );
  console.log({ data });
  return {
    data,
    error,
    isLoading: shouldFetch && !data && !error,
  };
};

//fetching grants detailed data based cardIds
export const fetchGrants = async (grantsIds) => {
  if (!grantsIds || grantsIds.length === 0) return [];
  const promises = grantsIds.map(async (id) => {
    const res = await fetch(
      `https://nextjs-test-beryl-gamma.vercel.app/api/grants?id=${id}`
    );
    if (!res.ok) throw new Error(`Failed to fetch cards with id ${id}`);
    return res.json();
  });
  return Promise.all(promises);
};

//fetching one detaild card info based on id  useGrantDetails
export const useGrantDetails = (id) => {
  const { data, error } = useSWR(
    `https://nextjs-test-beryl-gamma.vercel.app/api/grants?id=${id}`,
    fetcher,
    { suspense: true }
  );
  return {
    data,
    error,
    isLoading: !error && !data,
  };
};
//   try {
//     const res = await fetch(
//       `https://nextjs-test-beryl-gamma.vercel.app/api/grants?id=${id}`
//     );

//     if (!res.ok) throw new Error("Failed to fetch card data");

//     const data = await res.json();
//     return data;
//   } catch (error) {
//     console.error("Error in fetchGrant:", error);
//     throw error;
//   }
// };

// //fetching transaction data based transactionsIds
// export const fetchTransactions = async (transactionIds) => {
//   if (!transactionIds || transactionIds.length === 0) return [];
//   const promises = transactionIds.map(async (id) => {
//     const res = await fetch(
//       `https://nextjs-test-beryl-gamma.vercel.app/api/transactions?id=${id}`
//     );
//     if (!res.ok) throw new Error(`Failed to fetch transaction with id ${id}`);
//     const transaction = await res.json();
//     return transaction;
//   });
//   return Promise.all(promises);
// };

//Får det inte att funka så gjorde om denna..
//To fix this, we should ensure that fetchTransactionById is a pure function that doesn't rely on hooks like useSWR
export const fetchTransactionById = async (id) => {
  try {
    const response = await fetch(
      `https://nextjs-test-beryl-gamma.vercel.app/api/transactions?id=${id}`
    );

    if (!response.ok) {
      console.error(
        `Failed to fetch transaction with ID ${id}: ${response.statusText}`
      );
      return null;
    }

    const transactionData = await response.json();
    return transactionData;
  } catch (error) {
    console.error(`Error fetching transaction with ID ${id}:`, error);
    return null;
  }
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

// //fetching Grantees detaild data based on userIds
// export const useGranteesIds = (userIds) => {
//   if (!userIds || userIds.length === 0) return [];
//   const grantesData = userIds.map((id) => {
//     const { data, error } = useSWR(
//       `https://nextjs-test-beryl-gamma.vercel.app/api/initiatives/${id}`,
//       fetcher,
//       { suspense: true }
//     );
//     return {
//       data,
//       error,
//       isLoading: !error && !data,
//     };
//   });
//   return grantesData;
// };

// export const useGranteesIds = (userIds) => {
//   const { data, error } = useSWR(
//     userIds && userIds.length > 0
//       ? `https://nextjs-test-beryl-gamma.vercel.app/api/grantees?ids=${userIds.join(
//           ","
//         )}`
//       : null,
//     fetcher,
//     { suspense: true }
//   );

//   return {
//     data,
//     error,
//     isLoading: !error && !data,
//   };
//   console.log({ data });
// };
export const fetchGranteeById = async (id) => {
  try {
    const response = await fetch(
      `https://nextjs-test-beryl-gamma.vercel.app/api/grantees?id=${id}`
    );

    // Check if the response is OK (status 200-299)
    if (!response.ok) {
      console.error(
        `Error fetching grantee with ID ${id}: ${response.status} ${response.statusText}`
      );
      return null;
    }

    // If the response is OK, parse it as JSON
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(`Error fetching grantee with ID ${id}:`, error);
    return null;
  }
};

export const fetchGrantById = async (id) => {
  try {
    const response = await fetch(
      `https://nextjs-test-beryl-gamma.vercel.app/api/grants?id=${id}`
    );

    if (!response.ok) {
      console.error(
        `Error fetching grant with ID ${id}: ${response.status} ${response.statusText}`
      );
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching grant with ID ${id}:`, error);
    return null;
  }
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
    console.error("Error in fetchGrant:", error);
    throw error;
  }
};
