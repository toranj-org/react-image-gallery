import React from 'react';
import {
  Navigate,
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { routeUtils } from '../utils';

import * as Home from '../module-home';
import * as System from '../module-system';


export const App = () => {

  const routes = [
    ...Home.Routes.all,
    // must be the last router
    ...System.Routes.all
  ]

  return (
    <BrowserRouter>
      <Routes>
        {/* navigate to home for index route */}
        <Route
          path="/"
          element={<Navigate to={routeUtils.buildRoute(Home.Routes.Home)} replace />}
        />
        {/* modules routes */}
        {React.Children.toArray(routes.map(route => {
          return (
            <Route path={route.path}
              element={
                <React.Suspense fallback={<>...</>}>
                  {React.createElement(route.component)}
                </React.Suspense>
              } />
          )
        }))}
      </Routes>
    </BrowserRouter>
  );
}
