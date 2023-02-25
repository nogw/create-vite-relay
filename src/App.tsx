import { Suspense } from 'react';

import { AppProviders } from './providers';
import { Environment } from './relay';
import { Routes } from './routes';

function App() {
  return (
    <AppProviders environment={Environment}>
      <Suspense>
        <Routes />
      </Suspense>
    </AppProviders>
  );
}

export default App;
