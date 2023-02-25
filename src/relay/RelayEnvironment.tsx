import {
  Environment,
  Network,
  RecordSource,
  Store,
  FetchFunction,
  Variables,
  RequestParameters,
} from 'relay-runtime';

import { fetchQuery } from './fetchQuery';

const fetchRelay: FetchFunction = async (params: RequestParameters, variables: Variables) => {
  return fetchQuery(params.text as string, variables);
};

const RelayEnvironment = new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource()),
});

export default RelayEnvironment;
