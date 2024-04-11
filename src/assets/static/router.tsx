import React from 'react';
import { v4 } from 'uuid';
import { Router } from '#/types/router';

const PAGE_URL = {
    root: '/',
    product: {
        index: 'product',
        ai: 'product/ai',
        docs: 'product/docs',
        wikis: 'product/wikis',
        projects: 'product/projects',
        calendar: {
            index: 'calendar',
            download: 'product/calendar/download'
        },
        'template gallery': 'product/templates',
        'customer stories': 'product/customers',
        connections: 'product/integrations',
        engineering: 'product/notion-for-engineering',
        design: 'product/notion-for-design',
        product: 'product/notion-for-product',
        managers: 'product/notion-for-managers',
        education: 'product/notion-for-education'
    },
    help: {
        index: 'help',
        academy: 'notion-academy',
        guides: 'guides'
    },
    APIDocs: 'developer.notion.com',
    blog: 'blog',
    consultants: 'consultants',
    community: `notion/${v4()}`,
    download: 'download',
    enterprise: 'enterprise',
    logIn: 'login',
    nonProfits: 'nonprofits',
    partner: 'become-a-partner',
    personal: 'personal',
    pricing: 'pricing',
    remote: 'remote',
    requestDemo: 'contact-sales',
    signup: 'signup',
    startups: 'startups',
    teams: 'teams',
    webClipper: 'web-clipper',
    webinars: 'webinars'
} as const;

const ROUTER: Router = {};

export {PAGE_URL, ROUTER};
