import React, { FC } from 'react';
import { Nav, NavbarBrand } from 'react-bootstrap';

import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import { LAYOUT } from '#/assets/static/layout';

import { NavDropdowns } from 'ui/Layout/NavDropdowns';

// eslint-disable-next-line import/order
import styles from './Layout.module.scss';
import { PAGE_URL } from '#/assets/static/router';

export const Layout: FC = () => {
    return (
        <div className={styles.pageWrapper}>
            <div className="page-container">
                <header>
                    <Nav className={styles.pageNav}>
                        <NavbarBrand className={styles.navBrand}>
                            <a href={PAGE_URL.root}>
                                <img src={LAYOUT.navBrand.src} alt={LAYOUT.navBrand.alt} />
                            </a>
                        </NavbarBrand>
                        <div className={styles.actions}>
                            <div className={styles.actionGroup}>
                                <NavDropdowns dropdownsData={LAYOUT.navDropdowns} />
                                <NavLink to={PAGE_URL.pricing} className={cn(styles.navItem, styles.navBtn)}>
                                    Pricing
                                </NavLink>
                            </div>
                            <div className={styles.actionGroup}>
                                <NavLink to={PAGE_URL.requestDemo} className={cn(styles.navItem, styles.navBtn)}>
                                    Request a demo
                                </NavLink>
                                <span className={styles.navDividerSm} />
                                <NavLink to={PAGE_URL.logIn} className={cn(styles.navItem, styles.navBtn)}>
                                    Log in
                                </NavLink>
                                <NavLink
                                    to={PAGE_URL.signup}
                                    className={cn(styles.navItem, styles.navBtn, styles.signUpBtn)}
                                >
                                    Get Notion free
                                </NavLink>
                            </div>
                        </div>
                    </Nav>
                </header>
            </div>
        </div>
    );
};
