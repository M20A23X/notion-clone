import { HTMLProps } from 'react';
import { NavData, NavDropdownColumn } from '#/types/common';

import Logo from '#/assets/images/layout/header/logo.svg';

import Sparkles from '#/assets/images/layout/header/sparkles.svg';
import File from '#/assets/images/layout/header/file.svg';
import Book from '#/assets/images/layout/header/book.svg';
import Target from '#/assets/images/layout/header/target.svg';
import Calendar from '#/assets/images/layout/header/calendar.svg';
import TeamSizeEnterprise from '#/assets/images/layout/header/team-size-enterprise.png';
import TeamSizeBusiness from '#/assets/images/layout/header/team-size-small-business.png';
import TeamSizePersonal from '#/assets/images/layout/header/team-size-personal.png';
import { PAGE_URL } from '#/assets/static/router';

export const LAYOUT: {
    navBrand: HTMLProps<HTMLImageElement>;
    navDropdowns: NavData<NavDropdownColumn[]>;
} = {
    navBrand: { src: Logo.toString(), alt: 'brand icon' },
    navDropdowns: {
        product: [
            {
                data: [
                    {
                        icon: { src: Sparkles.toString(), alt: 'sparkles' },
                        name: 'AI',
                        description: 'Integrated AI assistant',
                        url: PAGE_URL.product.ai
                    },
                    {
                        icon: { src: File.toString(), alt: 'file' },
                        name: 'docs',
                        description: 'Simple & powerful',
                        url: PAGE_URL.product.ai
                    },
                    {
                        icon: { src: Book.toString(), alt: 'book' },
                        name: 'wikis',
                        description: 'Centralize your knowledge',
                        url: PAGE_URL.product.wikis
                    },
                    {
                        icon: { src: Target.toString(), alt: 'target' },
                        name: 'projects',
                        description: 'For every team or size',
                        url: PAGE_URL.product.projects
                    },
                    {
                        icon: { src: Calendar.toString(), alt: 'calendar' },
                        name: 'calendar',
                        description: 'Time and work, together',
                        url: PAGE_URL.product.calendar.index
                    }
                ]
            },
            {
                data: [
                    {
                        name: 'template gallery',
                        description: 'Setups to get you started',
                        url: PAGE_URL.product['template gallery']
                    },
                    {
                        name: 'customer stories',
                        description: 'See how teams use Notion',
                        url: PAGE_URL.product['customer stories']
                    },
                    {
                        name: 'connections',
                        description: 'Connect your tools to Notion',
                        url: PAGE_URL.product.connections
                    }
                ]
            }
        ],
        download: [
            {
                data: [
                    { name: 'notion', url: PAGE_URL.download },
                    { name: 'calendar', url: PAGE_URL.product.calendar.download },
                    { name: 'Web Clipper', url: PAGE_URL.webClipper }
                ],
                note: 'Notion is always at home<br>right <a href="#" target="_blank">in your browser</a>'
            }
        ],
        solutions: [
            {
                header: 'by team size',
                data: [
                    {
                        icon: { src: TeamSizeEnterprise, alt: 'team-size-enterprise' },
                        name: 'enterprise',
                        description: 'advanced features for your org',
                        url: PAGE_URL.enterprise
                    },
                    {
                        icon: { src: TeamSizeBusiness, alt: 'team-size-business' },
                        name: 'small business',
                        description: 'run your team on one tool',
                        url: PAGE_URL.teams
                    },
                    {
                        icon: { src: TeamSizePersonal, alt: 'team-size-personal' },
                        name: 'personal',
                        description: 'free for individuals',
                        url: PAGE_URL.personal
                    }
                ]
            },
            {
                header: 'by team function',
                data: [
                    { name: 'design', url: PAGE_URL.product.design },
                    { name: 'engineering', url: PAGE_URL.product.engineering },
                    { name: 'product', url: PAGE_URL.product.product },
                    { name: 'managers', url: PAGE_URL.product.managers }
                ]
            },
            {
                header: 'notion for',
                data: [
                    { name: 'startups', url: PAGE_URL.startups },
                    { name: 'remote work', url: PAGE_URL.remote },
                    { name: 'education', url: PAGE_URL.product.education },
                    { name: 'nonprofits', url: PAGE_URL.nonProfits }
                ]
            }
        ],
        resources: [
            {
                data: [
                    { name: 'blog', url: PAGE_URL.blog },
                    { name: 'notion Academy', url: PAGE_URL.help.academy },
                    { name: 'guides & tutorials', url: PAGE_URL.help.guides },
                    { name: 'webinars', url: PAGE_URL.webinars },
                    { name: 'help center', url: PAGE_URL.help.index },
                    { name: 'API docs', url: PAGE_URL.APIDocs },
                    { name: 'community', url: PAGE_URL.community },
                    { name: 'hire a consultant', url: PAGE_URL.consultants },
                    { name: 'become a partner', url: PAGE_URL.partner }
                ]
            }
        ]
    }
};
