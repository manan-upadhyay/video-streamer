import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import required components
import Master from './layout/Master';
import Protected from './layout/PrivateRoute';
import AuthState from './context/AuthState';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));
const FolderDetails = lazy(() => import('./pages/FolderDetails'));
const Login = lazy(() => import('./pages/Login'));

const Router = () => {
  return (
    <AuthState>
      <BrowserRouter>
        <Master>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route
                path="/"
                element={
                  <Protected>
                    <Home />
                  </Protected>
                }
              />
              <Route
                path="/:folderId"
                element={
                  <Protected>
                    <FolderDetails />
                  </Protected>
                }
              />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </Master>
      </BrowserRouter>
    </AuthState>
  );
};

export default Router;
