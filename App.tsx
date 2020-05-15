import React, { useEffect } from 'react';
import Navigator from './src/Navigation';
import ErrorBoundary from './ErrorBoundary'

const App: React.FunctionComponent = () => {
  return (
    <ErrorBoundary>
      <Navigator />
    </ErrorBoundary>
  );
};

export default App;