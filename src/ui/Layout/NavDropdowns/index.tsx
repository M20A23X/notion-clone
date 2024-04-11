import React, { FC, ReactElement, RefObject, useEffect, useRef, useState } from 'react';
import { NavDropdown as NavDropdownBootstrap, NavItem } from 'react-bootstrap';
import { v4 } from 'uuid';
import cn from 'classnames';

import { NavDropdownColumn, NavData } from '#/types/common';

// eslint-disable-next-line import/order
import styles from '../Layout.module.scss';

interface INavDropdownItem {
    clickedState: ReturnType<typeof useState<number>>;
    index: number;
    tabName: string;
    tabColumns: NavDropdownColumn[];
}

interface INavDropdowns {
    dropdownsData: NavData<NavDropdownColumn[]>;
}

const NavDropdown: FC<INavDropdownItem> = (props) => {
    const [isHovered, setHoveredState] = useState<boolean>();

    const {
        clickedState: [clickedDropdownIndex, setClickedDropdownIndex],
        index,
        tabName,
        tabColumns
    } = props;
    const myRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

    const dropdownItems: ReactElement[] = tabColumns.reduce(
        (elems: ReactElement[], items: NavDropdownColumn, index: number): ReactElement[] => {
            const columnItems: ReactElement[] = items.data.map((item) => (
                <li key={v4()}>
                    <NavDropdownBootstrap.Item className={styles.dropdownItem}>
                        {item?.icon && (
                            <img
                                src={item.icon?.src}
                                alt={item.icon?.alt}
                                className={cn(styles.dropdownItemIcon, {
                                    [styles.dropdownItemIconSvg]: item.icon.src?.endsWith('.svg')
                                })}
                            />
                        )}
                        <span className={styles.dropdownItemText}>
                            <span>{item.name}</span>
                            {item?.description && (
                                <span className={styles.dropdownItemDescription}>{item.description}</span>
                            )}
                        </span>
                    </NavDropdownBootstrap.Item>
                </li>
            ));

            elems.push(
                <li
                    key={v4()}
                    className={cn(styles.dropdownColumn, {
                        [styles.navDivider]: index !== tabColumns.length - 1
                    })}
                >
                    {items?.header ? <h6 className={styles.dropdownColumnHeader}>{items.header}</h6> : null}
                    <ul>{columnItems}</ul>
                    {items?.note ? (
                        <span
                            className={styles.dropdownColumnNote}
                            dangerouslySetInnerHTML={{ __html: items.note }}
                            style={{ textWrap: 'nowrap' }}
                        />
                    ) : null}
                </li>
            );
            return elems;
        },
        []
    );

    return (
        <NavItem className={cn(styles.navItem, { [styles.navItemActive]: clickedDropdownIndex === index })}>
            <NavDropdownBootstrap
                ref={myRef}
                title={tabName}
                className={styles.navItemBootstrap}
                id={`${tabName}-${v4()}`}
                show={isHovered || clickedDropdownIndex === index}
                onMouseEnter={() => setHoveredState(true)}
                onMouseLeave={() => setHoveredState(false)}
                onFocus={() => setClickedDropdownIndex(index)}
                onBlur={() => setClickedDropdownIndex(-1)}
            >
                <ul className={styles.dropdownMenu}>{dropdownItems}</ul>
            </NavDropdownBootstrap>
        </NavItem>
    );
};

export const NavDropdowns: FC<INavDropdowns> = (props) => {
    const { dropdownsData } = props;

    const clickedState = useState<number>();

    const dropdowns: ReactElement[] = Object.entries(dropdownsData).map(([tabName, tabColumns], index) => (
        <NavDropdown key={v4()} clickedState={clickedState} tabName={tabName} tabColumns={tabColumns} index={index} />
    ));

    return <>{dropdowns}</>;
};
