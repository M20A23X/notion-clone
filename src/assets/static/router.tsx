import React from 'react';
import { Router } from '#/types/router';

const PAGE_URL = {
    root: '/',
    logIn: 'login',
    pricing: 'pricing',
    product: 'product',
    requestDemo: 'contact-sales',
    signup: 'signup'
} as const;

const ROUTER: Router = {
    logIn: <></>,
    pricing: <></>,
    product: <></>,
    requestDemo: <></>,
    root: <></>,
    signup: <></>
};

export { PAGE_URL, ROUTER };
