import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

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
