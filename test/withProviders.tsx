import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { RelayEnvironmentProvider } from 'react-relay';
import { BrowserRouter } from 'react-router-dom';

import { Environment } from '../src/relay';

const ErrorFallback = () => {
  return (
    <div>
      <h2>Ooops, something went wrong :( </h2>
      <button onClick={() => window.location.assign(window.location.origin)}>Refresh</button>
    </div>
  );
};

type AppProviderProps = {
  children: React.ReactNode;
  environment: typeof Environment;
};

export const AppProviders = ({ children, environment = Environment }: AppProviderProps) => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <BrowserRouter>{children}</BrowserRouter>
      </ErrorBoundary>
    </RelayEnvironmentProvider>
  );
};
