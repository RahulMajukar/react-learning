import React, { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

const App = () => (
    <div>
        <Suspense fallback={<div>Loading...</div>}>
            <LazyComponent />
        </Suspense>
    </div>
);

export default App;
