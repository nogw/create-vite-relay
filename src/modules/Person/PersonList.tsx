import { useCallback } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { graphql, usePaginationFragment } from 'react-relay';

import { PersonList_query$key } from './__generated__/PersonList_query.graphql';
import { PersonListPaginationQuery } from './__generated__/PersonListPaginationQuery.graphql';
import Person from './Person';

const personListQuery = graphql`
  fragment PersonList_query on Root
  @argumentDefinitions(first: { type: Int, defaultValue: 15 }, after: { type: String })
  @refetchable(queryName: "PersonListPaginationQuery") {
    allPeople(first: $first, after: $after) @connection(key: "Person_allPeople") {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges {
        node {
          id
          ...Person_person
        }
      }
    }
  }
`;

type PersonListProps = {
  query: PersonList_query$key;
};

const PersonList = (props: PersonListProps) => {
  const { data, loadNext, isLoadingNext } = usePaginationFragment<
    PersonListPaginationQuery,
    PersonList_query$key
  >(personListQuery, props.query);

  const loadMore = useCallback(() => {
    if (isLoadingNext) {
      return;
    }

    loadNext(5);
  }, [isLoadingNext, loadNext]);

  if (!data.allPeople) {
    return null;
  }

  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={loadMore}
      hasMore={data.allPeople.pageInfo.hasNextPage}
      loader={<div key={0}>Loading...</div>}
      useWindow
    >
      {data.allPeople.edges?.map((node) => {
        if (!node?.node) {
          return null;
        }

        return <Person key={node.node.id} person={node.node} />;
      })}
    </InfiniteScroll>
  );
};

export default PersonList;
