import React from 'react';
import './App.scss';

import { ROUTER } from '#/assets/static/router';

import { RouterProvider } from '#/providers';

const App = () => {
    return <RouterProvider router={ROUTER} />;
};

export default App;
