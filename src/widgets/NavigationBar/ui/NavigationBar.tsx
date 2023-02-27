import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import styles from './NavigationBar.module.scss';
import {UxLink, UxLinkTheme} from "shared/ui/UxLink/UxLink";
import {UxThemeSwitcher} from "shared/ui/UxThemeSwitcher/UxThemeSwitcher";

interface NavigationBarProps {
    className?: string,
}

export const NavigationBar = ({className}: NavigationBarProps) => {
    return (
        <div className={classNames(styles.NavigationBar, {}, [className])}>
            <UxThemeSwitcher/>
            <div className={styles.links}>
                <UxLink theme={UxLinkTheme.SECONDARY} to={"/"}>
                    Main Page
                </UxLink>
                <UxLink theme={UxLinkTheme.SECONDARY} to={"/about"}>
                    About Page
                </UxLink>
            </div>
        </div>
    );
};

