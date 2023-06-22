import React from 'react';
import Header from '../ui/Header';
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
