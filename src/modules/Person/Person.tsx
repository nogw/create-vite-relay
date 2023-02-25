import { useTranslation } from 'react-i18next';
import { graphql, useFragment } from 'react-relay';

import { Person_person$key } from './__generated__/Person_person.graphql';

type PersonProps = {
  person: Person_person$key;
};

const Person = (props: PersonProps) => {
  const { t } = useTranslation();

  const person = useFragment<Person_person$key>(
    graphql`
      fragment Person_person on Person {
        name
        height
        homeworld {
          name
        }
      }
    `,
    props.person
  );

  return (
    <div>
      <ul>
        <li>
          <strong>{t('name')}: </strong>
          {person.name}
        </li>
        <li>
          <strong>{t('height')}: </strong>
          {person.height}
        </li>
        <li>
          <strong>{t('homeworld')}: </strong>
          {person.homeworld?.name}
        </li>
      </ul>
    </div>
  );
};

export default Person;
