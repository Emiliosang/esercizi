import React from 'react';
import { SWRConfig } from 'swr';
import AppContent from './AppContent';

const fetcher = async (...args) => {
  const response = await fetch(...args);
  const data = await response.json();
  return data;
};

export default function App() {
  return (
    <SWRConfig value={{ fetcher }}>
      <AppContent />
    </SWRConfig>
  );
}