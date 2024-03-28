import { ReactElement } from 'react';
import { PAGE_URL } from '#/assets/static/router';

export type Router = { [key in keyof typeof PAGE_URL]: ReactElement };
