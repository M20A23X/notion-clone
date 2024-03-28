import React, { FC, ReactElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { v4 } from 'uuid';

import { Router } from '#/types/router';

import { PAGE_URL } from '#/assets/static/router';

interface IRouterProvider {
    router: Router;
}

export const RouterProvider: FC<IRouterProvider> = ({ router }) => {
    const routes: ReactElement[] = Object.entries(router).map(([path, element]) => (
        <Route key={v4()} path={path} element={element}></Route>
    ));

    return (
        <BrowserRouter>
            <Routes>
                <Route path={PAGE_URL.root} element={<></>}>
                    {routes}
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
