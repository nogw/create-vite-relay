import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <main>
      <h1>Create-vite-relay</h1>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default Root;
