import { Variables } from 'relay-runtime';

import { GRAPHQL_URL } from '../config';

export const fetchQuery = async (query: string, variables: Variables) => {
  const response = await fetch(GRAPHQL_URL, {
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const data = await response.json();

  return data;
};
