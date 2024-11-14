import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Profile from './Profile';
import ProtectedRoute from './ProtectedRoute';

const App = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/profile"
          element={<ProtectedRoute component={Profile} />}
        />
      </Routes>
    </div>
  );
};

export default App;