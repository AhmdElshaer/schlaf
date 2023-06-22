import React from 'react';
import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import Home from './pages/Home';

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {path: '/', element: <RootLayout />, children: [
    {index: true, element: <Home />}
  ]}
])

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
