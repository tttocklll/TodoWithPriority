import React from 'react';
import Navigator from './src/Navigation';
import RootErrorBoundary from './ErrorBoundary'
console.disableYellowBox = true;

const App: React.FunctionComponent = () => {
  return (
    <RootErrorBoundary>
      <Navigator />
    </RootErrorBoundary>
  );
};

export default App;