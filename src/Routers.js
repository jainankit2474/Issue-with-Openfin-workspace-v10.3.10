import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import OpenFinNotification from './OpenFinNotification';

function Routers() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/OpenFinNotification" element={<OpenFinNotification />} />
        </Routes>
        <Outlet />
      </BrowserRouter>
    </div>
  );
}

export default Routers;
