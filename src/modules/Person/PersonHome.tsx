import { useTranslation } from 'react-i18next';
import { graphql, useFragment, useLazyLoadQuery } from 'react-relay';

import { PersonHome_query$key } from './__generated__/PersonHome_query.graphql';
import { PersonHomeQuery } from './__generated__/PersonHomeQuery.graphql';
import PersonList from './PersonList';

const PersonHome = () => {
  const { t } = useTranslation();

  const response = useLazyLoadQuery<PersonHomeQuery>(
    graphql`
      query PersonHomeQuery {
        ...PersonHome_query
      }
    `,
    {},
    { fetchPolicy: 'store-or-network' }
  );

  const query = useFragment<PersonHome_query$key>(
    graphql`
      fragment PersonHome_query on Root {
        ...PersonList_query
      }
    `,
    response
  );

  return (
    <div>
      <h1>{t('persons')}</h1>
      <PersonList query={query} />
    </div>
  );
};

export default PersonHome;
