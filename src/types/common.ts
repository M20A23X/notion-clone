import { HTMLProps } from 'react';

type NavItem = {
    icon?: HTMLProps<HTMLImageElement>;
    name: string;
    description?: string;
    url: string;
};

type NavDropdownColumn = {
    header?: string;
    data: NavItem[];
    note?: string;
};

type NavData<T> = {
    [k: string]: T;
};

export type { NavItem, NavDropdownColumn, NavData };
