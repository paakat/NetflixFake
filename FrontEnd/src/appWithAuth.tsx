// Node modules
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Project files
import Modal from "components/Modal";
import Admin from "pages/Admin";
import AdminContent from "pages/AdminContent";
import AdminDetailsOther from "pages/AdminDetailsOther";
import AdminDetailsSeries from "pages/AdminDetailsSeries";
import Content from "pages/Content"
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import VideoPlayer from "pages/VideoPlayer";
import { ModalProvider } from "state/ModalContext";

import { useState, useEffect } from 'react';
import Auth1 from "Authentication/authPage";
import ProtectedRoute from "Authentication/ProtectedRoute";
import { UserAuthContextProvider } from "Authentication/UserAuthContext";


import "styles/style.css";

export default function App() 
{
  return (
    <div className="App">
      <UserAuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/content/:code" element={<Content />} />
            <Route path="/video/:code"   element={<VideoPlayer />} />

<Route path="/admin/*"                     element={<Auth1/>} />
<Route path="/admin-content/:code"        element={<ProtectedRoute> <AdminContent/>       </ProtectedRoute>} />
<Route path="/admin-details-other/:code"  element={<ProtectedRoute> <AdminDetailsOther/>  </ProtectedRoute>} />
<Route path="/admin-details-series/:code" element={<ProtectedRoute> <AdminDetailsSeries/> </ProtectedRoute>} />

          </Routes>
          {/* To handle the modal/popups of the website */}
          <Modal />
        </BrowserRouter>
      </UserAuthContextProvider>
    </div>
  );
}


// Touched 
