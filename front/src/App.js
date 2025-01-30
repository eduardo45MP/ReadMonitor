import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { createTable } from './src/database/Database';

export default function App() {
  React.useEffect(() => {
    createTable();
  }, []);

  return <AppNavigator />;
}
