import { Routes as Router, Route } from 'react-router-dom';

import PersonHome from '../modules/Person/PersonHome';
import PersonRoot from '../modules/Person/Root';

export const Routes = () => {
  return (
    <Router>
      <Route path="/" element={<PersonRoot />}>
        <Route index element={<PersonHome />} />
      </Route>
    </Router>
  );
};
